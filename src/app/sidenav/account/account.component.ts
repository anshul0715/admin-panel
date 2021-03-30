import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }
  headers:Array<string>=["First Name","Last Name","Phone Number","Email","City"]
  userList:Array<any> = JSON.parse(localStorage.getItem('Users'));
  username:string = (localStorage.getItem('username'));
  ngOnInit(): void {
  }
}
