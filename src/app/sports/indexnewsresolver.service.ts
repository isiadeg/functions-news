import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FetchindexnewsService} from './fetchindexnews.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsIndexnewsresolverService implements Resolve<any>{

  constructor(private routi:ActivatedRoute, private datafetcher: FetchindexnewsService) { }
spit:any={};
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    this.spit.route = route.paramMap.get('route');
this.spit.url = route.paramMap.get('url');
/*subscribe(parames=>{
      this.spit.route=parames.get("route");
    this.spit.url=parames.get("url");*/
    console.log(this.spit);
    if(this.spit.route == null){this.spit.route="index";
    this.spit.url="https://eventregistry.org/api/v1/article/getArticles?resultType=articles&sourceUri=edition.cnn.com&sourceUri=aljazeera.com&includeArticleImage=true&lang=eng&dateStart=2019-01-09&forceMaxDataTimeWindow=31";
    }
//})
      return this.datafetcher.getdata(this.spit.url);
  }

}
