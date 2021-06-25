import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salesperson } from './salesperson.class';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {

  baseurl: string = "http://localhost:5000/api/salespersons"

  constructor(private http: HttpClient) { }

  list(): Observable<Salesperson[]>
  {
    return this.http.get(`${this.baseurl}`) as Observable<Salesperson[]>;
  }

  getByPk(id: number): Observable<Salesperson>
  {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Salesperson>;
  }

  create(salesperson :Salesperson): Observable<Salesperson>
  {
    return this.http.post(`${this.baseurl}`, salesperson) as Observable<Salesperson>;
  }

  change(salesperson: Salesperson): Observable<any>
  {
     return this.http.put(`${this.baseurl}/${salesperson.id}`, salesperson) as Observable<Salesperson>;
  }
}
