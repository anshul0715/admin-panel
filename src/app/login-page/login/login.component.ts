import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private service : LoginService , private routes: Router) { }
  brandName:string="Mindfire Solutions";
  msg:string="";
  logIn:boolean=false;
  ngOnInit():void {
  }
  onClick(){
    this.logIn=!this.logIn;
  }
  check(uname: string, pwd : string):any
  {
    var output = this.service.checkusernameandpassword(uname, pwd);
    if(output == true)
    {
      this.routes.navigate(['/home']);
    }
    else{
      this.msg ='Invalid username or password';
    }
  }
}
