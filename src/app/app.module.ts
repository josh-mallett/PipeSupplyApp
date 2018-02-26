import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'main', component: MainLoginComponent }, 
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'login/:type', component: LoginComponent },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }, 
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainLoginComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
