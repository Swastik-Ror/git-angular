import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
<<<<<<< HEAD
  productMessage:undefined|string;
  constructor(private route: ActivatedRoute, private product:Product, private router:Router){}
=======
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product:Product, private Route:Router){}
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125

  ngOnInit(): void{
    let productId=this.route.snapshot.paramMap.get('id');
    console.warn(productId);
     productId && this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data);
<<<<<<< HEAD
      this.productData=data;    
    })
  }
  
=======
      this.productData=data; 
      
    })
  }
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125

  submit(data:product){
    console.warn(data);
    if(this.productData){
<<<<<<< HEAD
      data.id= this.productData.id
    }
   this.product.updateProduct(data).subscribe((result)=>{
    if(result){
     this.productMessage="product has updated"
    }
   });
   setTimeout(()=>{
    this.productMessage= undefined
    this.router.navigate(['/seller-home'])
   },3000)
    

=======
      data.id= this.productData.id;
    }

    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="product updated successfully"
      }
    });


    setTimeout(()=>{
      this.productMessage=undefined;
      this.Route.navigate(['/seller-home'])
    },3000);
   
  
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125
  }

}
