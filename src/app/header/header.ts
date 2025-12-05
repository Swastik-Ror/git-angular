import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../services/product';
import { product } from '../data-types';



@Component({
  selector: 'app-header',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuType: string = 'default';
  sellerName: string = "";
  userName:string="";
  searchResult: undefined | product[];
  cartItems=0;

  constructor(private route: Router, private product: Product) { }


  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
            let sellerstore = localStorage.getItem('seller');
            let sellerData = sellerstore && JSON.parse(sellerstore)[0];
            this.sellerName = sellerData.name;
            this.menuType = "seller";
          
        } else if(localStorage.getItem('user')){
         let userStore= localStorage.getItem('user');
         let userData= userStore && JSON.parse(userStore);
         this.userName= userData.name;
         this.menuType='user';
         this.product.getCartList(userData.id)
        }else
         {
          this.menuType = 'default'
          
          0
        }
      }
    });

    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems=JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length
    })
  }


  logoutSeller() {
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

  userLogout(){
     localStorage.removeItem('user');
    this.route.navigate(['/'])
    this.product.cartData.emit([]);
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result) => {
        if(result.length>5){
           result.length=5;
        }
        this.searchResult =result;
      })
    }
  }

  hideSearch(){
    this.searchResult=undefined
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }

submitSearch(val:string){
  console.warn(val)
  this.route.navigate([`search/${val}`])
}


}
