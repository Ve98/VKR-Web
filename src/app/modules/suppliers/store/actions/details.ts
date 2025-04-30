import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from "@angular/common/http";
import { SupplierModel } from '../../models';

export const enterToDetails = createAction('[Suppliers] enter to details', props<{ id: number }>());

export const loadSupplier = createAction('[Suppliers] load supplier')
export const loadSupplierSuccess = createAction('[Suppliers] load supplier success', props<{ supplier: SupplierModel }>());
export const loadSupplierFails = createAction('[Suppliers] load supplier fails', props<{ error: HttpErrorResponse }>());
