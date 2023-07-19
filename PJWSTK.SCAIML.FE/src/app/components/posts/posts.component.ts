import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private http : HttpClient) { }

  posts : Post[] = []

  ngOnInit(): void {
    this.getPosts()


  }


  private getPosts(){
    this.http.get<Post[]>("http://localhost:7071/api/GetPosts").subscribe(result =>{
      this.posts = result;
      console.log(this.posts)
    })
  }

}
