import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from '../index/index.component';
import {IndexnewsresolverService} from '../index/indexnewsresolver.service';
import {NigeriaIndexnewsresolverService} from '../nigeria/indexnewsresolver.service';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import{SearchComponent} from '../search/search.component';
import {IdComponent} from '../index/id/id.component';
import { NigeriaComponent } from '../nigeria/nigeria.component';
import { NigeriaIdComponent } from '../nigeria/id/id.component';
import {SportsComponent} from '../sports/sports.component';
import {SportsIdComponent} from '../sports/id/id.component';
import {SearchIdComponent} from '../search/id/id.component';
import { SportsIndexnewsresolverService } from "../sports/indexnewsresolver.service";
import { SearchIndexnewsresolverService } from "../search/indexnewsresolver.service";
import{TokenService} from '../admin/token.service';
import {TokenGuard} from '../admin/token.guard';
import{AdminComponent} from '../admin/admin.component';
import { LoginComponent } from "../admin/login/login.component";


 const routes=[
  {path: 'index', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'index/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'nigeria', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'nigeria/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'nigeriaheadline', component: NigeriaComponent, resolve: {indexnewsresolver: NigeriaIndexnewsresolverService}
},
{path: 'nigeriaheadline/:id', component: NigeriaIdComponent, resolve: {indexnewsresolver: NigeriaIndexnewsresolverService}
},
{path: 'cnn', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'cnn/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'bbc', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'bbc/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'msn', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'msn/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'aljazeera', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'aljazeera/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'thepunch', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'thepunch/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'saharareporters', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'saharareporters/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'tribune', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'tribune/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'dailytrust', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'dailytrust/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'skysports', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'skysports/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'goal', component: IndexComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'goal/:id', component: IdComponent, resolve: {indexnewsresolver: IndexnewsresolverService}
},
{path: 'sports/:id', component: SportsIdComponent, resolve: {indexnewsresolver: SportsIndexnewsresolverService}
},
{path: 'search', component: SearchComponent, resolve: {indexnewsresolver: SearchIndexnewsresolverService}},
{path: 'search/:id', component: SearchIdComponent, resolve: {indexnewsresolver: SearchIndexnewsresolverService}},
{path: 'admin', component: AdminComponent, canActivate: [TokenGuard] /* ,  resolve: {tokenresolver: TokenService} */
},
{path: 'login', component:LoginComponent},
{path: '', redirectTo: '/index', pathMatch: 'full'},
{path: '**', component: PagenotfoundComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class RoutingModuleModule { }
