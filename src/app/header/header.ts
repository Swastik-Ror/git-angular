import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
<<<<<<< HEAD
import { Product } from '../services/product';
import { product } from '../data-types';

=======
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125


@Component({
  selector: 'app-header',
<<<<<<< HEAD
  imports: [RouterLink, TitleCasePipe],
=======
  imports: [RouterLink,TitleCasePipe],
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuType: string = 'default';
<<<<<<< HEAD
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


=======
  sellerName:string="";

  constructor(private route:Router){ }


  ngOnInit(): void{
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          // console.warn('in seller area');

          this.menuType="seller"
          if(localStorage.getItem('seller')){
            let sellerstore=localStorage.getItem('seller');
            let sellerData = sellerstore && JSON.parse(sellerstore)[0];
            this.sellerName=sellerData.name;
          }

        }else{
          this.menuType='default'
        }
      }
    })
  }
  

  logoutSeller(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125
}
