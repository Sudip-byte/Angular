import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  causes :any;
 constructor(private http:HttpClient) { }
 searchAllCauses(value){
   console.log(value);
   this.causes= this.http.get<any>("http://localhost:8086/api/v1/causeType/"+value,{observe:'response'});
   console.log(this.causes);
   return this.causes
 }

}