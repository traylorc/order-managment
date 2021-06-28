import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';


import { SalespersonListComponent } from './salesperson/salesperson-list/salesperson-list.component';
import { SalespersonDetailComponent } from './salesperson/salesperson-detail/salesperson-detail.component';
import { SalespersonCreateComponent } from './salesperson/salesperson-create/salesperson-create.component';
import { SalespersonEditComponent } from './salesperson/salesperson-edit/salesperson-edit.component';



import { LoginComponent } from './salesperson/login/login.component';
import { E404Component } from './misc/e404/e404.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';



const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},

  {path:'cust/list', component: CustomerListComponent},
  {path:'cust/detail/:id', component: CustomerDetailComponent},
  {path:'cust/create', component: CustomerCreateComponent},
  {path:'cust/edit/:id', component: CustomerEditComponent},
  
  {path:'sp/list', component: SalespersonListComponent},
  {path:'sp/detail/:id', component: SalespersonDetailComponent},
  {path:'sp/create', component: SalespersonCreateComponent},
  {path:'sp/edit/:id', component: SalespersonEditComponent},
  
  
  {path:'order/create', component: OrderCreateComponent},

  {path: 'login', component: LoginComponent },
  
  
  
  
  {path:'**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
