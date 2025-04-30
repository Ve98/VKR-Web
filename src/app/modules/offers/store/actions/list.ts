import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { OfferModel } from '@app/modules/offers/models';

export const loadOffers = createAction('[Offers] load offers')
export const loadOffersSuccess = createAction('[Offers] load offers success', props<{ offers: OfferModel[] }>());
export const loadOffersFails = createAction('[Offers] load offers fails', props<{ error: HttpErrorResponse }>());
