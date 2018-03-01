import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login-service/login.service';
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'main', component: MainLoginComponent }, 
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'login/:type', component: LoginComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainLoginComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule,
    CustomerModule,
    SharedModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
