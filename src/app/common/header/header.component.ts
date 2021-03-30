import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login-page/service/login.service' 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service : LoginService) { }
  opened:boolean=false
  messages:number=9;
  logIn:boolean=false;
  buttonItemT:string="Login";
  buttonItemF:string="Log out";
  onClick():void{
    this.logIn=!this.logIn;
  }
  ngOnInit(): void {
    this.logIn=!this.logIn;
  }

}
