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
    this.members.push("Bartosz Zebrowski")

    this.http.get<any>("link").subscribe(response => {
      this.members = response
    })
  }

  
}

