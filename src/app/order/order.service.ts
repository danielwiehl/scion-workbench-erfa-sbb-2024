import {Injectable} from '@angular/core';
import orders from './orders.json';

@Injectable({providedIn: 'root'})
export class OrderService {

  public getOrder(id: string): Order {
    const order = orders.find(order => order.id === id);
    if (!order) {
      throw Error(`[NullOrderError] Cannot find order with id '${id}'.`);
    }
    return order;
  }

  public getOrders(): Order[] {
    return orders;
  }
}

export interface Order {
  id: string;
  date: string;
  customer: Customer;
  items: Item[];
  total: number;
  shippingAddress: Address;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Item {
  id: string;
  productId: string;
  quantity: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
