import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot  } from '@angular/router';


@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class SportsIdComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
dta:any;
data:any;
id:any;
datas:any;
index: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{this.id=params.get('id');
console.log(this.id);
    this.datas=this.route.snapshot.data['indexnewsresolver'];
  this.index=  this.datas.Mynews.findIndex((current)=>{if(current.title == this.id){return current}});
console.log(this.index);
this.data= this.datas.Mynews[this.index];
console.log(this.data);

  })


  }
display(data):void{
if(data= data.replace(/\n/g, "</br>")){console.log('replaced');}
  document.getElementById("body").innerHTML=data;
  console.log(data);
  document.getElementsByTagName('header')[0].innerHTML+=`<i class="fas fa-arrow" (click)="backtostories"></i>`;
document.getElementsByClassName('newsblock')[0].scrollIntoView();

}
}
