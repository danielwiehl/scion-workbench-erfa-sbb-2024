import {Component, computed, inject, input} from '@angular/core';
import {Order} from '../../order/order.service';
import {ProductService} from '../../product/product.service';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrl: './order-list-item.component.scss',
  standalone: true,
})
export class OrderListItemComponent {

  private productService = inject(ProductService);

  public order = input.required<Order>();

  protected productNames = computed(() => {
    return this.order().items.map(item => this.productService.getProduct(item.productId).name).join(', ');
  });
}
