import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import{Seller} from  './services/seller'

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuard implements CanActivate {

  constructor(private sellerService:Seller) {}  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
     if(localStorage.getItem('seller')){
      return true;  
    }

      return this.sellerService.isSellerLoggedIn;
    }

    
  }

