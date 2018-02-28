import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { ShopComponent } from './shop/shop.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const customerRoutes = [
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'shop', component: ShopComponent },
          { path: 'order-history', component: OrderHistoryComponent },
          { 
            path: '',
            redirectTo: 'shop',
            pathMatch: 'full'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
