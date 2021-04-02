import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Component({

  templateUrl: './index.component.html',
  styleUrls: ['../newsdesign.component.css']
})
export class NigeriaComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
   }
data: any;
  ngOnInit() {
    this.data=this.route.snapshot.data['indexnewsresolver'];
    console.log(this.data);
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
