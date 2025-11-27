import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../services/product';
import { product } from '../data-types';

@Component({
  selector: 'app-search',
  imports: [RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchResult: undefined | product[]
  searchMessage=""
  constructor(private activeRoute:ActivatedRoute, private product:Product ){}

  ngOnInit():void{
    let query= this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query)
    query && this.product.searchProducts(query).subscribe((result)=>{
      
      this.searchResult=result

      if(result.length === 0){
        this.searchMessage="Item Not Found" 
      
      }
    })
  }

}
