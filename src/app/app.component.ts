import { Component, OnChanges  } from '@angular/core';
import {Router, Event, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel,
   NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./newsdesign.component.css']
})
export class AppComponent implements OnChanges{
  title = 'ss';
  loading:boolean = true;
  constructor(private router: Router){


    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.loading=true;
        console.log(this.loading);
      }
      if(routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel ||
    routerEvent instanceof  NavigationEnd){
        this.loading = false;
        console.log(this.loading);
      }

    }
    );



  }
filterby: string;
searchword: string;

  ngOnChanges(){}
  search(){
    this.router.navigate(['./search', {filterby: this.filterby, searchword: this.searchword}]);

  }

}
