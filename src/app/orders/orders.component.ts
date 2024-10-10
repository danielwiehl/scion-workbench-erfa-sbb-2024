import {Component, inject} from '@angular/core';
import {OrderListItemComponent} from './order-list-item/order-list-item.component';
import {OrderService} from '../order/order.service';
import {WorkbenchRouter, WorkbenchView} from '@scion/workbench';

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
  private router = inject(WorkbenchRouter);

  protected orders = this.orderService.getOrders();

  constructor(view: WorkbenchView) {
    view.title = 'Orders';
  }

  protected onOrderOpen(id: string): void {
    this.router.navigate(['orders', id])
  }
}
