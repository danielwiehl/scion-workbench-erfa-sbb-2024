import {Component, computed, inject, input} from '@angular/core';
import {ProductService} from '../../product/product.service';
import {Item} from '../order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
  standalone: true,
})
export class OrderItemComponent {

  private productService = inject(ProductService);

  public item = input.required<Item>();

  protected product = computed(() => this.productService.getProduct(this.item().productId)!);
}
