import { Component,EventEmitter,Input ,OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ApicallService } from 'src/app/apicall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit{
   public count:number=0;
   public counttype="even"
   public data:Array<any>;
   public isloded:boolean;
   constructor (private getapi:ApicallService,private _router:Router){
    this.data=[]
    this.isloded=false;
   }

  ngOnInit(){
    this.getapi.Getdata().subscribe((d:any)=>{
      
     d.results.forEach((result: { name: string; }) =>{
      this.getapi.getMoreData(result.name).subscribe((response:any)=>{
        this.data.push(response);
        console.log(this.data);
      })
     })
     
      

       
      
      
     })
  }
  @Output() location = new EventEmitter<any>();
 
  openDetails(id:number){
   this._router.navigate(['details',id])
   
  }

  openLocation(item:any){
    this.location.emit(item)
  console.log('hai')
  }
}
