import { Component } from '@angular/core';
import { Product } from '../services/product';
import { order } from '../data-types';

@Component({
  selector: 'app-my-orders',
  imports: [],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css'
})
export class MyOrders {

  orderData: order[] | undefined
  constructor(private product: Product) { }


  ngOnInit(): void {
   this.getorderList();
  }

  cancelOrder(orderId: number | undefined) {
    orderId && this.product.cancelOrder(orderId).subscribe((result) => {
     this.getorderList();
    })
  }
  getorderList(){
      this.product.orderList().subscribe((result)=>{
    this.orderData=result;
  })
  }
}
