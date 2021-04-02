import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router  } from "@angular/router";


@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class SearchIdComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }
dta:any;
data:any;
id:any;
datas:any;
index: any;
filterby: any;
searchword: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{this.id=params.get('id');
console.log(this.id);
this.filterby = params.get("filterby");
this.searchword = params.get("searchword");

    this.datas=this.route.snapshot.data['indexnewsresolver'];
  this.index=  this.datas.Mynews.findIndex((current)=>{if(current.uri == this.id){return current}});
console.log(this.index);
this.data= this.datas.Mynews[this.index];
console.log(this.data);

  })

  document.querySelector('#goback').addEventListener('click', ()=>{console.log('goback');

  this.router.navigate(['/search', {filterby: this.filterby, searchword: this.searchword}]);
});

document.querySelector('#goback2').addEventListener('click', ()=>{console.log('goback');

this.router.navigate(['/search',  {filterby: this.filterby, searchword: this.searchword}]);
});
  }
display(data):void{
if(data= data.replace(/\n/g, "</br>")){console.log('replaced');}
  document.getElementById("body").innerHTML=data;
  console.log(data);
  document.getElementsByTagName('header')[0].innerHTML+=`<i class="fas fa-arrow" (click)="backtostories"></i>`;
document.getElementsByClassName('newsblock')[0].scrollIntoView();

}









/*goback():void{
  this.router.navigate(['/'+this.routei, {
    route: this.routei,
    url: this.url
  }]);
}*/

}
