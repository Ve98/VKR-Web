import { SupplierModel } from '../../models';

export interface SuppliersState {
  //list
  suppliers: SupplierModel[];
  suppliersIsLoading: boolean;

  //details
  currentSupplier: SupplierModel;
}

export const initialState: SuppliersState = {
  //list
  suppliers: [],
  suppliersIsLoading: false,

  //details
  currentSupplier: null,
};
