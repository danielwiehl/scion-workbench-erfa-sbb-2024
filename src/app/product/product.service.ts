import products from './products.json';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductService {

  public getProduct(id: string): Product {
    const product = products.find(product => product.id === id);
    if (!product) {
      throw Error(`[NullProductError] Cannot find product with id '${id}'.`);
    }
    return product;
  }
}

export interface Product {
  id: string;
  name: string;
  price: number;
}
