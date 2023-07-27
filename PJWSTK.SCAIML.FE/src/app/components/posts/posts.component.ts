import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/Models/Post/Post';

//import {Post} from "../../Models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public loadingPosts : boolean = true;
  public Posts : Post[] = [];

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() : void{
    this.HttpClient.get<Post[]>("http://localhost:7071/api/GetPosts")
    .subscribe(resp =>{
        this.loadingPosts = false;
        this.Posts = resp;
      },
      error => {
        console.error(error);
      })
  }
}

// interface Post
// {
//   id: string,
//   memberIndex: string,
//   title: string,
//   description: string,
//   mainPhoto: string
// }
