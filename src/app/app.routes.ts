import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
import { SellerHome } from './seller-home/seller-home';
import { SellerAuthGuard } from './seller-auth-guard';
import { SellerAddProduct } from './seller-add-product/seller-add-product';
import { SellerUpdateProduct } from './seller-update-product/seller-update-product';
import { Search } from './search/search';
import { ProductDetails } from './product-details/product-details';
import { UserAuth } from './user-auth/user-auth';



export const routes: Routes = [
    {path:'', component:Home},
    { path:'seller-auth',component:SellerAuth},
    {path:'seller-home', component:SellerHome,canActivate:[SellerAuthGuard]},
    {path:'seller-add-product', component:SellerAddProduct,canActivate:[SellerAuthGuard]},
    {path:'seller-update-product/:id', component:SellerUpdateProduct,canActivate:[SellerAuthGuard]},
    {path:'search/:query', component:Search},
    {path:'details/:productId', component:ProductDetails},
    {path:'user-auth', component:UserAuth}
];
