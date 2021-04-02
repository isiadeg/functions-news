import { Injectable } from '@angular/core';
import { LoginService } from "./login.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements Resolve<any>{

  constructor(private loginservice: LoginService, private http: HttpClient) { }
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
return this.http.get<any>("http://localhost:5000/login/loginii.js" /* ,{
  email:this.loginservice.email,
  password: this.loginservice.password
}, {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}*/);
  }
}
