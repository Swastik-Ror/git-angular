import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogIn, SignUp } from '../data-types';
import { User } from '../services/user';

@Component({
  selector: 'app-user-auth',
  imports: [ FormsModule],
  templateUrl: './user-auth.html',
  styleUrl: './user-auth.css'
})
export class UserAuth  {
showLogin:boolean=true;

  constructor( private user:User){}

  ngOnInit():void{
  this.user.userAuthReload();
  }

  signUp(data:SignUp){

this.user.userSignUp(data)

  }

  login(data:LogIn){
 this.user.userLogin(data);
    
  }
  openSignup(){
  this.showLogin=true;
  }
  openLogin(){
this.showLogin=false;
  }

}
