
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../services/product';
import { cart, order } from '../data-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  totalPrice: number | undefined;
  cartData: cart[] | undefined;
  orderMsg:string |undefined

  constructor(private product: Product, private route: Router) { }
  ngOnInit(): void {
    this.product.currentCart().subscribe((result) => {
      let price = 0;
      this.cartData = result
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity);
        }

      });
      this.totalPrice = price + (price / 10) + 100 - (price / 10);
      console.warn(this.totalPrice);

    })
  }


  orderNow(data: { email: string, address: string, contact: string }) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;

    if (this.totalPrice) {
      let orderData: order = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id: undefined
      }

      this.cartData?.forEach((item) => {
        setTimeout(() => {
        item.id &&  this.product.deleteCartItems(item.id)
        }, 7000);

      })
      this.product.orderNow(orderData).subscribe((result) => {
        if (result) {
          this.orderMsg="Your order has been placed"
          setTimeout(()=>{
            this.route.navigate(['/my-orders'])
            this.orderMsg=undefined
          },4000);

        }
      })
    }


  }
}
