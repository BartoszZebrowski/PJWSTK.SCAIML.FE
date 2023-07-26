import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//layouts

//pages

//comonents
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MembersComponent } from './components/members/members.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MembersComponent,
    HomePageComponent,
    AboutUsComponent,
    PostPageComponent,
    AddPostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
