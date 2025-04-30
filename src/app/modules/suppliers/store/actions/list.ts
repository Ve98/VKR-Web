import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";

import { SupplierModel } from "../../models";

export const loadSuppliers = createAction('[Suppliers] load suppliers')
export const loadSuppliersSuccess = createAction('[Suppliers] load suppliers success', props<{ suppliers: SupplierModel[] }>());
export const loadSuppliersFails = createAction('[Suppliers] load suppliers fails', props<{ error: HttpErrorResponse }>());

export const showAddModal = createAction('[Suppliers] show add modal');

export const addSupplier = createAction('[Suppliers] add supplier', props<{ supplier: SupplierModel }>())
export const addSupplierSuccess = createAction('[Suppliers] add supplier success', props<{ response: any }>())
export const addSupplierFails = createAction('[Suppliers] add suppliers fails', props<{ error: HttpErrorResponse }>());
