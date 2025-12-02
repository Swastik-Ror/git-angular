import { Component } from '@angular/core';
import { Product } from '../services/product';
import { cart, priceSummary } from '../data-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {
  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  constructor(private product: Product, private route:Router){ }

  ngOnInit(): void {
   this.loadDetails()
  }

  removeToCart(cartId:number | undefined){
 cartId && this.cartData && this.product.removeToCart(cartId)
        .subscribe((result) => {
        this.loadDetails();
 

        })
  }

  loadDetails(){
     this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price* +item.quantity);
        }

      });
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + (price / 10) + 100 - (price / 10);
     if(!this.cartData.length){
      this.route.navigate(['/'])
     }

    })
  }

  checkout(){
    this.route.navigate(['/checkout'])
  }

}
