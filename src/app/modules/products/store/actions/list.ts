import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { ProductModel } from '@products/models';

export const loadProducts = createAction('[Products] load products')
export const loadProductsSuccess = createAction('[Products] load products success', props<{ products: ProductModel[] }>());
export const loadProductsFails = createAction('[Products] load products fails', props<{ error: HttpErrorResponse }>());
