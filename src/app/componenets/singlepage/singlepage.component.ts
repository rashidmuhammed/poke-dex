import { Component } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  public id:number 
   private sub:any
   private pokemondetails:Array<any>;
  constructor(private GetApi:ApicallService,private routes:ActivatedRoute,private route:Router){
    this.pokemondetails=[];
    this.id=0
  }
  ngOnInit():void{
    this.sub = this.routes.params.subscribe(params => {
      this.id = +params['id']; 
      console.log(this.id)
    });
  this.GetApi.getByid(this.id).subscribe((response)=>{
    console.log(response);
    this.pokemondetails=response;
  });
}

back(){
  this.route.navigate(['button'])
}

}
