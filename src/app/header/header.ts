import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [RouterLink,TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuType: string = 'default';
  sellerName:string="";

  constructor(private route:Router){}


  ngOnInit(): void{
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          // console.warn('in seller area')
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
}
