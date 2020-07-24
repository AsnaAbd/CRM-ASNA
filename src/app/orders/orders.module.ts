import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';



@NgModule({
  declarations: [PageOrdersComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
