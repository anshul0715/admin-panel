import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { UserDTO } from './userDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  brandName:String="MIndfire Solutions";
  formSubmitted:boolean=false;
  user:any={};
  constructor(private userService:UserService){}
  
  signup:any={};
  cities:Array<any>;
  stateList: Array<any> = [
    { name: 'Select State', cities: ['Select City'] },
    { name: 'Uttar Pradesh', cities: ['Noida', 'Kanpur', 'Varanasi'] },
    { name: 'Rajasthan', cities: ['Jaipur','Kota','Udaipur'] },
    { name: 'Tamil Nadu', cities: ['Chennai','Madurai','Vellore'] },
    { name: 'Maharashtra', cities: ['Mumbai','Pune','Nagpur'] },
  ];

 
  changeCountry( count:any) {
    this.cities = this.stateList.find(con => con.name == count).cities;
  }
  onSubmit(){
      this.user=Object.assign(this.user, this.signup);
      this.userService.addUser(this.user); 
      //localStorage.setItem('username',this.user.fname);
      //localStorage.setItem('password',this.user.password);
  }

  logIn:boolean=true;
  ngOnInit():void {
  }
  onClick(){
    this.logIn=!this.logIn;
  }

}
