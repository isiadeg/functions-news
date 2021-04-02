import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError, of}from 'rxjs';
import {map,tap, catchError} from 'rxjs/operators';
import {News} from './news';
import {MakeError} from './error';

@Injectable({
  providedIn: 'root'
})
export class FetchindexnewsService {

  constructor(private http:HttpClient) { }
  getdata(urli):Observable<any | MakeError>{
    return this.http.get<any | MakeError>(urli+'&apiKey=11d54620-b419-4a77-b68a-5afeed779851', {

    }

    ).pipe(
      map((data)=><News>{
      /*for( let datas in data.articles.results){
        Mynews: any =[];
        this.Mynews.push({uri: data.articles.results[datas].uri,
        date: data.articles.results[datas].date,
        time:data.articles.results[datas].time,
        url: data.articles.results[datas].url,
        title: data.articles.results[datas].title,
        body:data.articles.results[datas].body,
        sourceuri: data.articles.results[datas].source.uri,
        sourcetitle: data.articles.results[datas].source.title,
        imageurl: dats.articles.results[datas].image,
        authorsname: data.articles.results[datas].authors.name
      });
      return this.Mynews;*/
      Mynews: data.articles.results
      }
    ),
    catchError(error=>this.handleError(error))
    )
  }

Error : MakeError = new MakeError();
handleError(error: HttpErrorResponse): Observable<MakeError>{
  this.Error.message = error.statusText;
  return throwError(this.Error);
}
}
