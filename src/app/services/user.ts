import { Injectable } from '@angular/core';
import { LogIn, SignUp } from '../data-types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(private http: HttpClient, private route: Router) { }


  userSignUp(user: SignUp) {
    this.http.post("http://localhost:3000/users", user, { observe: 'response' })
      .subscribe((result) => {
        console.warn(result);
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.route.navigate(['/'])
        }
      })
  }
   userLogin(data:LogIn){
    this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'})
    .subscribe((result)=>{
      if(result.body && result.body.length){
         localStorage.setItem('user', JSON.stringify(result.body[0]));
          this.route.navigate(['/'])
        
      }else{
        alert('email or pasword incorrect')
      }
    });
   }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/']);
    }
  }
}
