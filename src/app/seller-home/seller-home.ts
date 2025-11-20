import { Component } from '@angular/core';
import { Product } from '../services/product';
import { product } from '../data-types';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-seller-home',
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css'
})
export class SellerHome {
  icons=faTrash;
  editIcon=faEdit;
  
  productList:undefined | product[];
  productMessage:string | undefined;
 constructor(private product:Product){}

 ngOnInit(): void{
 this.list();
 }

 deleteProduct(id:number){
 console.warn(id);

 this.product.deleteProduct(id).subscribe((result)=>{
  if(result){
  this.productMessage="product is deletes successfully"
  this.list()
  }
 })

 setTimeout(()=>{
 this.productMessage=undefined
 },3000);
 }


 list(){
   this.product.productList().subscribe((result)=>{
    console.warn(result);
    this.productList=result;
   })
 }
}



