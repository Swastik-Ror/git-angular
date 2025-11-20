import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Seller } from '../services/seller';
import { Router } from '@angular/router'
import { LogIn, SignUp } from '../data-types';




@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})

export class SellerAuth implements OnInit {
  constructor(private seller: Seller, private router: Router) { }
  showLogin = false;
  authError:string="";


  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: SignUp): void {
    console.warn(data);
    this.seller.userSignUp(data)
  };
  login(data: LogIn): void {
    this.authError="";
    // console.warn(data);
    this.seller.userLogIn(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })

  }


  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }

}




