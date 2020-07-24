import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormOrderComponent } from './components/form-order/form-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';



@NgModule({
  declarations: [PageOrdersComponent, PageAddOrderComponent, FormOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
