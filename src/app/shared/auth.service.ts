import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
 export class AuthService{
    constructor(){}

    Isloggedin(){
        return localStorage.getItem("data")
    }

 }   
