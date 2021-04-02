import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent} from '@angular/common/http';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApikeyinterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (req.url == "https://newsapi.org/v2/top-headlines?country=ng"){
const cloner = req.clone({
  setHeaders: {"X-Api-Key": "387506ceaa6c449384588a7215accebb"}
});
return next.handle(cloner);

    }
    return next.handle(req);

  }
}
