import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { SalespersonListComponent } from './salesperson/salesperson-list/salesperson-list.component';
import { SalespersonDetailComponent } from './salesperson/salesperson-detail/salesperson-detail.component';
import { SalespersonCreateComponent } from './salesperson/salesperson-create/salesperson-create.component';
import { SalespersonEditComponent } from './salesperson/salesperson-edit/salesperson-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    E404Component,
    MenuComponent,
    SalespersonListComponent,
    SalespersonDetailComponent,
    SalespersonCreateComponent,
    SalespersonEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
