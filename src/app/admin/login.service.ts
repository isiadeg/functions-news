import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable, of} from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirecturl: any;

  constructor(private http: HttpClient, private router: Router) { }
  email:any;
  password: any;
token: any;
  gettoken(email, password){
    this.email = email;
    this.password= password;
    let hi=JSON.stringify({email:email,
    password: password});
    return this.http.post('http://localhost:5000/login/login.js', hi, {headers: new HttpHeaders({
      "Content-Type": "application/json"
    })}).subscribe((token)=>{this.token = token;
  console.log(this.token);
  if(this.token){this.router.navigate(["/admin"]);}else{
    if(this.redirecturl){
    this.router.navigate(this.redirecturl);}else{
      this.router.navigate(['/index']);
    }
  }


},
(e)=>{
  console.log(e);
});


  }
  islogin():boolean{
    if(this.token){
      return true;
    }
    else{
      return false;
    }
  }

}
