import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {

  public members: any[] = [];
  public loading: boolean = true;

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllMembers();
  }

  getAllMembers() : void
  {
    this.HttpClient.get<string[]>("http://localhost:7071/api/GetMembers")
      .subscribe((resp : string[]) => 
        {
          this.loading = false;
          this.members = resp;
        },
        error =>
        {
          console.error(error);
        })
  }
}
