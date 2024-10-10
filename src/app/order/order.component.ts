import {Component, computed, inject, input} from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from './order.service';
import {OrderItemComponent} from './order-item/order-item.component';
import {CustomerInfoComponent} from './customer-info/customer-info.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  standalone: true,
  imports: [
    OrderItemComponent,
    CustomerInfoComponent,
  ],
})
export class OrderComponent {

  private orderService = inject(OrderService);
  private router = inject(Router);

  public id = input.required<string>();

  protected order = computed(() => this.orderService.getOrder(this.id()));

  protected onProductOpen(id: string): void {
    this.router.navigate(['products', id]);
  }
}
