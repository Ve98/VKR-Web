import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductModel } from '@products/models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = `${environment.apiBaseUrl}/products`;

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<ProductModel[]> {
    const url = this.baseUrl;
    return this.http.get<ProductModel[]>(url);
  }

  loadProduct(id: number): Observable<ProductModel> {
    const url = this.baseUrl + `/${id}`;
    return this.http.get<ProductModel>(url)
  }
}
