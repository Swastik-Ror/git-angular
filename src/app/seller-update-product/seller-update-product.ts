import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product';
import { product } from '../data-types';


@Component({
  selector: 'app-seller-update-product',
  imports: [FormsModule],
  templateUrl: './seller-update-product.html',
  styleUrl: './seller-update-product.css'
})

export class SellerUpdateProduct {
  productData: undefined | product;
  constructor(private route: ActivatedRoute, private product:Product){}

  ngOnInit(): void{
    let productId=this.route.snapshot.paramMap.get('id');
    console.warn(productId);
     productId && this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.productData=data;  
      
    })
  }

  submit(data:product){
    console.warn(data);
    

  }

}
