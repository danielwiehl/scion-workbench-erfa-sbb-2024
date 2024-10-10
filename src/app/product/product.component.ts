import {Component, computed, effect, inject, input} from '@angular/core';
import {ProductService} from './product.service';
import {WorkbenchView} from '@scion/workbench';

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

  constructor(view: WorkbenchView) {
    effect(() => {
      view.title = `Product ${this.id()}`;
      view.heading = this.product().name;
    });
  }
}
