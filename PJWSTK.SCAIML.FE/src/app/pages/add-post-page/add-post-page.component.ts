import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.scss']
})
export class AddPostPageComponent implements OnInit {

  public memberIndex : string = ''
  public title : string = ''
  public descritpion : string = ''
  public content? : File = undefined
  public photos? : File[] = undefined
  public mainPhoto? : File = undefined


  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    
  }


  public sendPost(){
    let formData = new FormData();

    formData.append('MemberIndex', this.memberIndex)
    formData.append('Title', this.memberIndex)
    formData.append('Description', this.memberIndex)
    formData.append('Content', this.content as Blob)
    formData.append('MainPhoto', this.mainPhoto as Blob)

    this.photos?.forEach((photo, index) => {
      formData.append(`ContentPhoto[${index}]`, photo as Blob)
    })

    console.log(this.memberIndex)
    console.log(this.title )
    console.log(this.descritpion)
    console.log(this.content)
    console.log(this.photos)
    console.log(this.mainPhoto)

    this.http.post("http://localhost:7071/api/CreatePost", formData).subscribe()
  }
}
