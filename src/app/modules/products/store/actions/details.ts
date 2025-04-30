import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from '@products/models';

export const enterToDetails = createAction('[Products] enter to details', props<{ id: number }>());

export const loadProduct = createAction('[Products] load product')
export const loadProductSuccess = createAction('[Products] load product success', props<{ product: ProductModel }>());
export const loadProductFails = createAction('[Products] load product fails', props<{ error: HttpErrorResponse }>());
