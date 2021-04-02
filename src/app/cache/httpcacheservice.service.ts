import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpcacheserviceService {
private cache = {};
  constructor() { }
d:any;
e:any;
invalidate(){

}

  get(url:string): any{
console.log(this.cache);
console.log(url);
    return this.cache[url];

  }
put(url:string, response:HttpResponse<any>){
  console.log(url);
  this.d=new Date();
  this.e=this.d.getTime();
  this.cache[url]= {"respons": response, "time":this.e};
  console.log(this.cache[url]);
}
  clearcache(url:string):void{
    delete this.cache[url];
  }
}
