import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson.class';
import { SalespersonService } from '../salesperson.service';

@Component({
  selector: 'app-salesperson-list',
  templateUrl: './salesperson-list.component.html',
  styleUrls: ['./salesperson-list.component.css']
})
export class SalespersonListComponent implements OnInit {

  sales: Salesperson[] = []

  constructor(private salessvc: SalespersonService) { }

  ngOnInit(): void {
  }

}
