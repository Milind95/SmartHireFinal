import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  users = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/users.json').subscribe((users: any) => {
      console.log("users list is -->", users);
      this.users = users;
    })
  }

}
