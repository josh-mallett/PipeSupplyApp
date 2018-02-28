import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';

import { CustomerRoutingModule } from './customer-routing.module';
import { ShopComponent } from './shop/shop.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerComponent, ShopComponent, OrderHistoryComponent]
})
export class CustomerModule { }
