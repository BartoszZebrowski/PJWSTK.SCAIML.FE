import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//layouts
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

//pages
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

//comonents
import { AppRoutingModule } from './app-routing.module';
import { MembersListComponent } from './components/members-list/members-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    MembersListComponent,
    AboutUsComponent,
    MainLayoutComponent,
    PostPageComponent,
    HomePageComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }
