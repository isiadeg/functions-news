import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FetchindexnewsService} from './fetchindexnews.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchIndexnewsresolverService implements Resolve<any>{
spit:any={};
filterby:any;
searchword: any;
url:any;
  constructor(private routi:ActivatedRoute, private datafetcher: FetchindexnewsService) { }

  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    this.filterby = route.paramMap.get('filterby');
this.searchword = route.paramMap.get('searchword');
console.log(this.filterby);
console.log(this.searchword);
switch(this.filterby){
case '':
this.url = 'https://eventregistry.org/api/v1/article/getArticles?resultType=articles&sourceUri=edition.cnn.com&sourceUri=aljazeera.com&includeArticleImage=true&lang=eng&dateStart=2019-01-09&forceMaxDataTimeWindow=31';
break;

case null :
this.url='https://eventregistry.org/api/v1/article/getArticles?resultType=articles&sourceUri=edition.cnn.com&sourceUri=aljazeera.com&includeArticleImage=true&lang=eng&dateStart=2019-01-09&forceMaxDataTimeWindow=31';
break;

case 'date':
this.url='https://eventregistry.org/api/v1/article/getArticles?resultType=articles&includeArticleImage=true&lang=eng&dateStart='+this.searchword+'&dateEnd='+this.searchword+'&forceMaxDataTimeWindow=31';
break;

case 'keywords':
this.url='https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword='+this.searchword+'&includeArticleImage=true&lang=eng&dateStart=2019-01-09&forceMaxDataTimeWindow=31';

break;

case 'country':
this.url='https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword='+this.searchword+'&includeArticleImage=true&lang=eng&dateStart=2019-01-09&forceMaxDataTimeWindow=31';
break;
}
/*subscribe(parames=>{
      this.spit.route=parames.get("route");
    this.spit.url=parames.get("url");*/
    //console.log(this.spit);
    //if(this.spit.route == null){this.spit.route="index";
  //  this.spit.url="https://eventregistry.org/api/v1/article/getArticles?resultType=articles&sourceUri=edition.cnn.com&sourceUri=aljazeera.com&includeArticleImage=true&lang=eng&dateStart=2019-01-09&forceMaxDataTimeWindow=31";
    //}
//})
      return this.datafetcher.getdata(this.url);
  }

}
