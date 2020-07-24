import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormOrderComponent } from './components/form-order/form-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';



@NgModule({
  declarations: [PageOrdersComponent, PageAddOrderComponent, FormOrderComponent, PageEditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
