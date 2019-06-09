import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  users = [];
  usersCopy = [];
  searchValue: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/users.json').subscribe((users: any) => {
      console.log("users list is -->", users);
      this.users = users;
      this.usersCopy = JSON.parse(JSON.stringify(this.users));
    })
  }

  searchValues(event) {
    console.log(this.searchValue);
    let valueToMatch = this.searchValue.toLowerCase();

    this.users = this.usersCopy.filter(user => {
        return user.firstName.toLowerCase().includes(valueToMatch) || user.lastName.toLowerCase().includes(valueToMatch) || user.employeeId.toLowerCase().includes(valueToMatch)
      
    });
    // category.data = technologies

  }

}
