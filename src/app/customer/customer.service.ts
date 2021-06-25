import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.class';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseurl: string = "http://localhost:5000/api/customers"


  constructor(private http: HttpClient) 
  { }

  list(): Observable<Customer[]>
  {
    return this.http.get(`${this.baseurl}`) as Observable<Customer[]>;
  }

  getByPk(id: number): Observable<Customer>
  {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Customer>;
  }

  create(customer :Customer): Observable<Customer>
  {
    return this.http.post(`${this.baseurl}`, customer) as Observable<Customer>;
  }

  change(customer: Customer): Observable<any>
  {
     return this.http.put(`${this.baseurl}/${customer.id}`, customer) as Observable<Customer>;
  }

  

}
