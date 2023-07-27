import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Models/Post/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() PostData : Post | undefined;
  public ConvertedImage : string = ''; 

  // backGrounds : any {
  //   'background-image': `url('data:iamge/png;base64,${this?.PostData?.mainPhoto}')`
  // }

  constructor() { }

  ngOnInit(): void {
    this.ConvertedImage = JSON.parse(JSON.stringify(this.PostData.mainPhoto))
  }

}
