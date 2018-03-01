import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { ShopComponent } from './shop/shop.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { HeaderBarComponent } from '../header-bar/header-bar.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [CustomerComponent, ShopComponent, OrderHistoryComponent]
})
export class CustomerModule { }
