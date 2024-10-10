import {Component, input} from '@angular/core';
import {Address, Customer} from '../order.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.scss',
  standalone: true,
})
export class CustomerInfoComponent {

  public customer = input.required<Customer>();
  public address = input.required<Address>();
}
