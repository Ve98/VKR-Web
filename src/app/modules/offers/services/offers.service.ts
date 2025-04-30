import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { OfferModel } from '@app/modules/offers/models';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private baseUrl = `${environment.apiBaseUrl}/offers`;

  constructor(private http: HttpClient) {}

  loadOffers(): Observable<OfferModel[]> {
    const url = this.baseUrl;
    return this.http.get<OfferModel[]>(url);
  }

  loadOffer(id: number): Observable<OfferModel> {
    const url = this.baseUrl + `/${id}`;
    return this.http.get<OfferModel>(url)
  }
}
