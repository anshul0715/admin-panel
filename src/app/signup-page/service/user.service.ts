import { Injectable } from '@angular/core';
import { UserDTO } from '../register/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user){
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));
      users=[...users, user]
    } else{
      users=[user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
