import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn:  'root'
  })

@Component({
  selector: 'members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members : any = []

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getMembers()
  }

  private getMembers() {
    this.http.get<any>("http://localhost:7071/api/GetMembers").subscribe(response => {
      this.members = response
    })
  }

  
}

