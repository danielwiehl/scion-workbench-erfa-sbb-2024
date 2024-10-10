import {Routes} from '@angular/router';
import {DesktopComponent} from './desktop/desktop.component';
import {ProductComponent} from './product/product.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderComponent} from './order/order.component';

export const routes: Routes = [
  {path: '', component: DesktopComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'orders/:id', component: OrderComponent},
  {path: 'products/:id', component: ProductComponent},
];
