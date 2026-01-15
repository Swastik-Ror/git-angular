import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../services/product';
import { product } from '../data-types';
import {Router} from '@angular/router'

<<<<<<< HEAD
=======


>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125
@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.css'
})

export class SellerAddProduct {
 addProductMessage:string|undefined
  constructor(private product:Product, private route:Router){}

  ngOnInIt(): void{
  }

  submit(data:product){
       this.product.addProduct(data).subscribe((result)=>{
        console.warn(result);
        if(result){
          this.addProductMessage="product is added successfully"
          this.route.navigate(['/seller-home'])
        }

<<<<<<< HEAD
        setTimeout(()=>(
          this.addProductMessage=undefined),3000);
        });
              
  }
}
=======
        setTimeout(()=>{
          this.addProductMessage=undefined},3000);
        });
              

  }
}


 
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125
