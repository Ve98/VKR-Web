import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { ExcelExporterService } from '@shared/services';
import { OfferModel } from '@app/modules/offers/models';
import { DataSourceFilter } from '@shared/models';

import * as routerActions from '@shared/router/state/actions';
import * as actions from '@offers/store/actions';
import * as selectors from '@offers/store/selectors';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss',
})
export class OfferListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  translatePath = 'offers.list.table.';
  dataSource = new MatTableDataSource<OfferModel>();
  displayedColumns = [
    'id',
    'date',
    'amount',
    'product.name',
    'product.partNumber',
    'product.quantity',
    'product.price',
    'additionalExpenses',
    'commission',
    'description',
    'supplier.name'
  ];

  dataSourceFilters: DataSourceFilter[][] = [[], []];
  rangeFilters: Record<string, string> = {};
  filterErrors: Record<string, string> = {};

  private defaultFilterValueValue = '-';
  private filterDictionary= new Map<string, any>();

  private products: string[] = [];

  private onDestroy = new Subject<void>();

  constructor(
    private store$: Store,
    private excelExporter: ExcelExporterService
  ) { }

  // #region Lifecycle
  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'product.price': return item.product.price;
        case 'product.quantity': return item.product.quantity;
        default: return item[property];
      }
    };
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  private loadData() {
    this.store$.dispatch(actions.loadOffers());
    this.store$
      .select(selectors.getOffers)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(offers => {
        if (!offers || this.products.length > 0) return;

        const products = offers.map(o => o.product.name);
        this.products = [...new Set([this.defaultFilterValueValue, ...products])];
        this.dataSource.data = offers;

        this.setupFilter();
      })
  }

  private setupFilter() {
    this.dataSourceFilters[0].push({
      name: 'amount',
      type: 'range'
    });
    this.dataSourceFilters[0].push({
      name: 'additionalExpenses',
      type: 'range'
    });
    this.dataSourceFilters[0].push({
      name: 'commission',
      type: 'range'
    });

    this.dataSourceFilters[1].push({
      name: 'product.name',
      type: 'text',
      options: this.products,
      defaultValue: this.defaultFilterValueValue
    });
    this.dataSourceFilters[1].push({
      name: 'product.price',
      type: 'range'
    });
    this.dataSourceFilters[1].push({
      name: 'product.quantity',
      type: 'range'
    });

    this.filterPredicate();
  }
  //#endregion

  // #region Actions
  exportTable() {
    if (this.excelExporter) {
      this.excelExporter.exportTableToExcel('offer', 'offer');
    } else {
      console.error('ExcelExporterService is not available.');
    }
  }

  navigateToProduct(event: Event, element: OfferModel): void {
    event.stopPropagation();
    this.store$.dispatch(routerActions.go({ path: [`products/${ element.product.id }`] }));
  }

  navigateToSupplier(event: Event, element: OfferModel): void {
    event.stopPropagation();
    this.store$.dispatch(routerActions.go({ path: [`suppliers/${ element.supplier.id }`] }));
  }

  selectedRow(row: OfferModel) {
    this.store$.dispatch(actions.enterToDetails({ id: row.id as number }))
  }

  onRangeChange(filter: DataSourceFilter) {
    const input = this.rangeFilters[filter.name];
  
    if (!input || input.trim() === '') {
      this.filterDictionary.delete(filter.name);
      this.dataSource.filter = JSON.stringify(Object.fromEntries(this.filterDictionary));
      this.filterErrors = { ...this.filterErrors };
      delete this.filterErrors[filter.name];
      return;
    }
  
    const [fromStr, toStr] = input.split('-').map((val) => val.trim());
    const from = parseFloat(fromStr);
    const to = parseFloat(toStr);
  
    if (isNaN(from) || isNaN(to)) {
      this.filterErrors = {
        ...this.filterErrors,
        [filter.name]: 'invalidRange'
      };
      return;
    }
  
    if (from > to) {
      this.filterErrors = {
        ...this.filterErrors,
        [filter.name]: 'invalidFromToRange'
      };
      return;
    }
  
    const newErrors = { ...this.filterErrors };
    delete newErrors[filter.name];
    this.filterErrors = newErrors;
  
    const range = { from: from.toString(), to: to.toString() };
    this.selectFilter(range, filter);
  }

  selectFilter(selection: any, empfilter: DataSourceFilter) {
    if (empfilter.type === 'range') {
      const range = selection as { from: string; to: string };
      this.filterDictionary.set(empfilter.name, range);
    } else {
      this.filterDictionary.set(empfilter.name, selection);
    }
  
    this.dataSource.filter = JSON.stringify(Object.fromEntries(this.filterDictionary));
  }
  //#endregion 

  //#region Private methods
  private filterPredicate() {
    this.dataSource.filterPredicate = (record: OfferModel, filter: string): boolean => {
      const filters = JSON.parse(filter);
      let isMatch = true;
    
      for (const [key, value] of Object.entries(filters)) {
        if (value === this.defaultFilterValueValue) continue;
    
        const recordValue = this.getValueByPath(record, key);
    
        if (!recordValue) {
          isMatch = false;
          break;
        }
    
        if (typeof value === 'string') {
          if (!recordValue.toString().toLowerCase().includes(value.toLowerCase())) {
            isMatch = false;
            break;
          }
        }
    
        if (typeof value === 'object' && value !== null && 'from' in value && 'to' in value) {
          const from = typeof value.from === 'string' || typeof value.from === 'number'
            ? parseFloat(value.from as string)
            : NaN;
          const to = typeof value.to === 'string' || typeof value.to === 'number'
            ? parseFloat(value.to as string)
            : NaN;
        
          if (
            isNaN(from) || isNaN(to) ||
            recordValue < from || recordValue > to
          ) {
            isMatch = false;
            break;
          }
        }
      }
    
      return isMatch;
    };
  }

  private getValueByPath(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }
  //#endregion
}
