import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SupplierModel } from '@suppliers/models';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  private baseUrl = `${environment.apiBaseUrl}/suppliers`;

  constructor(private http: HttpClient) {}

  loadSuppliers(): Observable<SupplierModel[]> {
    const url = this.baseUrl;
    return this.http.get<SupplierModel[]>(url);
  }

  loadSupplier(id: number): Observable<SupplierModel> {
    const url = this.baseUrl + `/${id}`;
    return this.http.get<SupplierModel>(url)
  }
}
