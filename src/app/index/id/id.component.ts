import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router   } from "@angular/router";


@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) {
  }
dta:any;
data:any;
id:any;
datas:any;
index: any;
routei: any;
url: any;
  ngOnInit() {

    this.route.paramMap.subscribe((params)=>{this.id=params.get('id');
    this.routei=params.get('route');
    this.url=params.get('url');
console.log(this.url);
    this.datas=this.route.snapshot.data['indexnewsresolver'];
  this.index=  this.datas.Mynews.findIndex((current)=>{if(current.uri == this.id){return current}});
console.log(this.index);
this.data= this.datas.Mynews[this.index];
console.log(this.data);
  })

  document.querySelector('#goback').addEventListener('click', ()=>{console.log('goback');

  this.router.navigate(['/'+this.routei, {
    route: this.routei,
    url: this.url
  }]);
});

document.querySelector('#goback2').addEventListener('click', ()=>{console.log('goback');

this.router.navigate(['/'+this.routei, {
  route: this.routei,
  url: this.url
}]);
});

  }
display(data):void{
if(data= data.replace(/\n/g, "</br>")){console.log('replaced');}
  document.getElementById("body").innerHTML=data;
  console.log(data);
  document.getElementsByClassName('newsblock')[0].scrollIntoView();

}
/*goback():void{
  this.router.navigate(['/'+this.routei, {
    route: this.routei,
    url: this.url
  }]);
}*/

}
