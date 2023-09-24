import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public value=""
 public  data=""

  constructor (private router:Router){

  }

  ngOnInit(): void {
      
  } 

  login =()=>{
   if(this.data==="1234"&&this.value=="test123@gmail.com"){
     localStorage.setItem("data",this.data);
     localStorage.setItem("value",this.value);
     this.router.navigate(['button'])
     console.log("hai")
   }else if(this.data===""||this.value===""){
    alert("enter provided values")
   }
   else{
    alert("login failed")
   }
 }

}


