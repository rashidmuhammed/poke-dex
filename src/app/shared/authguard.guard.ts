import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private router:Router,private auth:AuthService){

  }
  canActivate(){
    if(this.auth.Isloggedin()){
      return true
    }else{
      this.router.navigate([""])
      
      return false
    }
     
    
      
    
  }
  
}
