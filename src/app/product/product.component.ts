import {Component, computed, inject, input} from '@angular/core';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
})
export class ProductComponent {

  private productService = inject(ProductService);

  public id = input.required<string>();

  protected product = computed(() => this.productService.getProduct(this.id()));
}
