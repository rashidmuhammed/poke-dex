import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  Getdata(){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=20`)
  }

//get more data
getMoreData(name:string){
  return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
}

//get by id
getByid(ID:number){
  return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${ID}`)
}
}
