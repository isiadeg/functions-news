import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(private loginservice:LoginService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
let  url = state.url;
this.loginservice.redirecturl = url;
console.log(this.loginservice.redirecturl);
if(this.loginservice.islogin() == false){
  this.router.navigate(['./login']);
}
    return this.loginservice.islogin();

  }

}
