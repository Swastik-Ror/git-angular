import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cart, LogIn, product, SignUp } from '../data-types';
import { User } from '../services/user';
import { Product } from '../services/product';

@Component({
  selector: 'app-user-auth',
  imports: [FormsModule],
  templateUrl: './user-auth.html',
  styleUrl: './user-auth.css'
})
export class UserAuth {
  showLogin: boolean = true;
  authError: string = "";
  constructor(private user: User, private product: Product) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: SignUp) {
    this.user.userSignUp(data)
  }

  login(data: LogIn) {
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result) => {
      console.warn("apple", result);
      if (result) {
        this.authError = "please enter valid user details"
      }else{
        this.localCartToRemoteCart()
        
      }

    })
  }
  openSignup() {
    this.showLogin = true;
  }
  openLogin() {
    this.showLogin = false;
  }


  localCartToRemoteCart() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id
    if (data) {
      let cartDataList: product[] = JSON.parse(data);

      cartDataList.forEach((product: product, index) => {
        let cartData: cart = {
          ...product,
          productId: product.id,
          userId
        }
        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.warn(("data is stored in DB"));

            }
          })
        }, 5000);
        if (cartDataList.length === index + 1) {
          localStorage.removeItem('localCart')
        }
      })
    }
   setTimeout(()=>{
     this.product.getCartList(userId);
   },2000);
  }

}
