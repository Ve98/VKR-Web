import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { ProductModel } from '@products/models';

import * as routerActions from '@shared/router/state/actions'
import * as actions from '@products/store/actions'
import * as selectors from '@products/store/selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  translatePath = 'products.list.table.';
  dataSource = new MatTableDataSource<ProductModel>();
  displayedColumns: string[] = [
    'id',
    'name',
    'measurement',
    'description'
  ];

  private onDestroy = new Subject<void>();

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(actions.loadProducts());
    this.store$
      .select(selectors.getProducts)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(data => { this.dataSource.data = data; })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  selectedRow(row: ProductModel) {
    this.store$.dispatch(actions.enterToDetails({ id: row.id as number }))
  }
}
