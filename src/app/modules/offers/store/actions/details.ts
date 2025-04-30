import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { OfferModel } from '@app/modules/offers/models';

export const enterToDetails = createAction('[Offers] enter to details', props<{ id: number }>());

export const loadOffer = createAction('[Offers] load offer')
export const loadOfferSuccess = createAction('[Offers] load offer success', props<{ offer: OfferModel }>());
export const loadOfferFails = createAction('[Offers] load offer fails', props<{ error: HttpErrorResponse }>());
