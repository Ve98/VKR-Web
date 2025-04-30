import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SupplierModel } from '@suppliers/models';

import * as actions from '@suppliers/store/actions';
import * as selectors from '@suppliers/store/selectors';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrl: './suppliers-list.component.scss'
})
export class SuppliersListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<SupplierModel>();
  displayedColumns: string[] = [
    'id',
    'name',
    'email'
  ];

  private onDestroy = new Subject<void>();

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(actions.loadSuppliers());
    this.store$
      .select(selectors.getSuppliers)
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

  selectedRow(row: SupplierModel) {
    this.store$.dispatch(actions.enterToDetails({ id: row.id as number }))
  }
}
