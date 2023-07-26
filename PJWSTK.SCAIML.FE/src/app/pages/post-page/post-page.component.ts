import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostPageComponent implements OnInit {

  postId : string = "54AA2F64-265A-4CBA-9C3D-F4ED470BF074"
  post : any;

  constructor(private readonly http : HttpClient) { }

  ngOnInit(): void {
    this.getPost(this.postId)
  }

  getPost(id : string){
    this.http.get(`http://localhost:7071/api/GetPost?54AA2F64-265A-4CBA-9C3D-F4ED470BF074`).subscribe(response => {
      this.post = response
    })
  }
}
