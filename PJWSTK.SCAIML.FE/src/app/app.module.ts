import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//layouts

//pages

//comonents
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MembersComponent } from './components/members/members.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
  
    LayoutComponent,
       NavbarComponent,
       MembersComponent,
       HomePageComponent,
       AboutUsComponent,
       PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
