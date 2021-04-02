import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {MakeError} from '../index/error';
import {catchError} from 'rxjs/operators';
import {FetchindexnewsService} from '../index/fetchindexnews.service';
import {News} from '../index/news';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../newsdesign.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http:HttpClient,
  private news:FetchindexnewsService) { }
parameters: any;
data : News;
url: any;

  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{this.parameters={
      filterby:data.get("filterby"),
    searchword: data.get("searchword")}

    // this.getsearch(this.url).subscribe((news)=>{
      // this.data = news;


     // });
    //news.getdata(this.url).subscribe((news)=>{
    //  this.data = news;
    //});
    console.log(this.parameters);
    this.data=this.route.snapshot.data['indexnewsresolver'];
});
  }
  getsearch(params): Observable<any | MakeError>{
    return this.http.get<any | MakeError>(params).pipe(
      catchError(e=>this.handleerror(e))
    )
  }
  error:MakeError = new MakeError;
  handleerror(e:HttpErrorResponse): Observable<Error>{
    this.error.message = e.statusText;
    return throwError(this.error);
  }

  publishdate:any;
  todaysdate: any;
  houago: number;
  hoursago:any;
  dayago: number;

  hoursiago(time){
  this.publishdate= new Date(time);
  this.todaysdate =new Date();
  this.publishdate=this.publishdate.getTime();
  this.todaysdate=this.todaysdate.getTime();
  this.dayago=Math.round((this.todaysdate - this.publishdate)/(1000*60*60*24));
  this.houago = Math.round((this.todaysdate - this.publishdate)/(1000*60*60));
  this.hoursago = `${Math.round((this.todaysdate - this.publishdate)/(1000*60*60))} hour${this.houago>1?"s":""} ago`;
  if (this.houago>24){
   this.hoursago = `${Math.round((this.todaysdate - this.publishdate)/(1000*60*60*24)) } day${this.dayago>1?"s":""} ago`
  }
  if(this.houago<1){
   this.hoursago = `${Math.ceil((this.todaysdate - this.publishdate)/(1000*60))} minute${(Math.round((this.todaysdate - this.publishdate)/(1000*60)))>1?"s":""} ago`;

  }
  return this.hoursago;
  }
}
