import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FetchdataService } from './services/fetchdata.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { ViewartComponent } from './viewart/viewart.component';
import { PostartComponent } from './postart/postart.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
// import {FlashMessageModule} from 'angular2-flash-message';

const appRoutes: Routes = [
	{path:'', component:HomeComponent},
	{path:'login', component:LoginComponent},
	{path:'register', component:RegisterComponent},
	{path:'profile', component:ProfileComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'postart', component:PostartComponent},
  {path:'viewart', component:ViewartComponent},
   {path:'profile/:name', component:UserinfoComponent},
] 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    UploadComponent,
    ViewartComponent,
    PostartComponent,
    UserinfoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    // FlashMessageModule
  ],
  providers: [ValidateService, AuthService, FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
