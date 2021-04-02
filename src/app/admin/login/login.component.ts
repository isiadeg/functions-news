import { Component, OnInit } from '@angular/core';
import{LoginService} from '../login.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: any;
password: any;
token: any;
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }
login():void{
  this.loginservice.gettoken(this.email, this.password);
}
}
