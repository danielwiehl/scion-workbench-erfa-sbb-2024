import {Component, computed, effect, inject, input} from '@angular/core';
import {OrderService} from './order.service';
import {OrderItemComponent} from './order-item/order-item.component';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {WorkbenchRouter, WorkbenchView} from '@scion/workbench';

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
  private router = inject(WorkbenchRouter);

  public id = input.required<string>();

  protected order = computed(() => this.orderService.getOrder(this.id()));

  constructor(view: WorkbenchView) {
    effect(() => view.title = `Order ${this.id()}`);
  }

  protected onProductOpen(id: string): void {
    this.router.navigate(['products', id], {partId: 'bottom'});
  }
}
