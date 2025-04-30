import { ProductModel } from "../../models"

export interface ProductState {
  //list
  products: ProductModel[];
  productsIsLoading: boolean;

  //details
  currentProduct: ProductModel;
  currentProductIsLoading: boolean;
}

export const initialState: ProductState = {
  //list
  products: [],
  productsIsLoading: null,

  //details
  currentProduct: null,
  currentProductIsLoading: null
}
