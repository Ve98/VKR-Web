import { SupplierModel } from '@suppliers/models';
import { ProductModel } from '@products/models';

export interface OfferModel {
  id: number;
  date: string;
  additionalExpenses: number;
  commission: number;
  amount: number;
  description: string;
  product: ProductModel;
  supplier: SupplierModel;
}
