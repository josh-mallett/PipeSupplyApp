import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderBarComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderBarComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
