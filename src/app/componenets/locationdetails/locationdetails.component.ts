import { Component } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
@Component({
  selector: 'app-locationdetails',
  templateUrl: './locationdetails.component.html',
  styleUrls: ['./locationdetails.component.css']
})
export class LocationdetailsComponent {
  
constructor(private api:ApicallService){

}

}
