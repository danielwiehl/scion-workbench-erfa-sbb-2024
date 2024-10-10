import {Component, inject} from '@angular/core';
import {OrderListItemComponent} from './order-list-item/order-list-item.component';
import {Router} from '@angular/router';
import {OrderService} from '../order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  standalone: true,
  imports: [
    OrderListItemComponent,
  ],
})
export class OrdersComponent {

  private orderService = inject(OrderService);
  private router = inject(Router);

  protected orders = this.orderService.getOrders();

  protected onOrderOpen(id: string): void {
    this.router.navigate(['orders', id])
  }
}
