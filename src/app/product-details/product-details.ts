import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product';
import { product } from '../data-types';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  productData: undefined| product;
  productQuantity:number=1;
  constructor(private activeRoute:ActivatedRoute, private product:Product ){}


  ngOnInit():void{
   let productId = this.activeRoute.snapshot.paramMap.get('productId');
   console.warn(productId);
   productId && this.product.getProduct(productId).subscribe((result)=>{
    console.warn(result)
    this.productData=result;
    
   })
   
  }
  handleQuantity(val:string){
if(this.productQuantity<20 && val==='plus'){
  this.productQuantity+=1
} else if (this.productQuantity>1 && val==='min'){
  this.productQuantity-=1
}
  }


AddToCart(){
  if(this.productData){
    this.productData.quantity=this.productQuantity
    if(!localStorage.getItem('user')){
      console.warn(this.productData);

    }
    
  }
}
}
