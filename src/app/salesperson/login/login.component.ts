import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Salesperson } from '../salesperson.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  message: string = "";

  constructor(private syssvc: SystemService, private router: Router) { }

  login(): void {
    this.syssvc.loggedInUser = null;
    if(this.password == "password"){
      let sperson = new Salesperson();
      this.syssvc.loggedInUser = sperson;
      console.debug(this.syssvc.loggedInUser);
      this.router.navigateByUrl("/cust/list")
    }
    this.message = "Login Failed";
    console.debug(this.syssvc.loggedInUser);
  }

  ngOnInit(): void {
  }

}
