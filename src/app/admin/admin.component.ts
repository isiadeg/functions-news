import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from "@angular/router";
import {HttpHeaders, HttpClient  } from "@angular/common/http";
import {LoginService} from './login.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
token: any;
  constructor(private route: ActivatedRoute, private http: HttpClient,
  private LoginService: LoginService) { }

  ngOnInit() {
    this.token= this.LoginService.token;
    //document.getElementById("token").value=this.token.user;
    console.log(this.token.user);
  }
  pictureurl: any;
  picturewords: any;
  pictures:any;
  file:any = document.getElementById("imagefile");



submit():void{
  //let hhh = document.getElementById("pictureurl").value;
  //console.log(hhh);
//  let hhi = JSON.parse(hhh);
  //let hi = JSON.stringify({
  //  pictureurl: hhi.image,
  //  id: hhi.id,
  //  picturewords: this.picturewords
  //});
  //console.log(hi);
  this.http.post("http://localhost:5000/login/posttofirebase", //hi,
  {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe((data)=>{console.log(data)},
(e)=>{console.log(e)});
}
}
