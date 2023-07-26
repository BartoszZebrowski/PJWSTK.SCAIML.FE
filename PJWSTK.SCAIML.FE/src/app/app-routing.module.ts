import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'post', component: PostPageComponent},
  {path:'add-post', component: AddPostPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
