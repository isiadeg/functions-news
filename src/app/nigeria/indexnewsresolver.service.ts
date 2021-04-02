import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FetchindexnewsService} from './fetchindexnews.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NigeriaIndexnewsresolverService implements Resolve<any>{

  constructor(private routi:ActivatedRoute, private datafetcher: FetchindexnewsService) { }
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
      return this.datafetcher.getdata();
  }
}
