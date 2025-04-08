import { ProductType } from './productType';

export type CartTypeMini = {
  id: string;
  chosenQuantity: number;
  price: number;
  title: string;
  totalPrice: number;
};

export type CartType = {
  [id: string]: CartTypeMini;
};
