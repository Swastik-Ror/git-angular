import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { product } from '../data-types';
import { Product } from '../services/product';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home', 
  imports: [ CommonModule,NgbCarouselModule,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true
})
export class Home implements OnInit {
    popularProducts: product[] | undefined;
    trendyProducts:undefined | product[]

    constructor(private product:Product){}

    ngOnInit(): void{
      this.product.popularProducts().subscribe((data)=>{
        // console.warn(data);
        this.popularProducts=data;
      });
      this.product.trendyProducts().subscribe((data)=>
      {
        this.trendyProducts=data;
      });
    }
}
