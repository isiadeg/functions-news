import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['../newsdesign.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
   }
  data: any;
  spit:any={};
  link1:any;
  link2:any;
  ngOnInit() {
    this.route.paramMap.subscribe(parames=>{

      this.spit.route=parames.get("route");
  this.spit.url=parames.get("url");
  if (parames.get('route') == null) {
    this.spit.route="index";
    this.spit.url="https://eventregistry.org/api/v1/article/getArticles?resultType=articles&sourceUri=edition.cnn.com&sourceUri=aljazeera.com&includeArticleImage=true&lang=eng&dateStart=2019-01-09&forceMaxDataTimeWindow=31";
  }
  console.log(this.spit);
    this.data=this.route.snapshot.data['indexnewsresolver'];
    console.log(this.data);
    this.link1=`['/${this.spit.route}',`;
    this.link2=`,{route: ${this.spit.route},
  url:${this.spit.url}

  }]`;

  });
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
