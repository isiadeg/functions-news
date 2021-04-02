import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RoutingModuleModule} from './routing-module/routing-module.module'
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import {HttpinterceptorService} from './httpinterceptor.service';
import { IdComponent } from './index/id/id.component';
import { NigeriaComponent } from './nigeria/nigeria.component';
import { NigeriaIdComponent } from './nigeria/id/id.component';
import {ApikeyinterceptorService} from './apikeyinterceptor.service';
import { SportsComponent } from './sports/sports.component';
import {SportsIdComponent  } from "./sports/id/id.component";
import { SearchIdComponent } from "./search/id/id.component";
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
PagenotfoundComponent,
    IndexComponent,
    SearchComponent,
    IdComponent,
    NigeriaComponent,
    NigeriaIdComponent,
    SportsComponent,
    SportsIdComponent,
    SearchIdComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModuleModule

  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass: ApikeyinterceptorService,multi:true },
   {provide:HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
