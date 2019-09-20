import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cause } from '../class/cause';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValuepassService {

  constructor(private http:HttpClient) 
  { }

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  emailFromLogin:string;

  causename:string;
  causedesc:string;
  id:string;
  receiverId:string;
  timestamp:string;
  location:string;
   
  saveEmailFromLoginComponent(email)
  {
      this.emailFromLogin = email;
  }

  getAllCauses()
  {
    console.log("Added Causes");
    return this.http.get('http://cause:8086/api/v1/causes',{observe:'response'})

  }

 
  getDataFromDonorLanding(name,description,id,receiverId,timestamp,location)
  {
    console.log(timestamp)
    this.causename = name;
    this.causedesc = description;
    this.id = id;
    this.receiverId = receiverId;
    this.timestamp = timestamp;
    this.location = location;
    console.log(timestamp)
  }

  getAllRecommendations()
  {
    console.log("Recommendation");
    return this.http.get<any>("http://recommendation:8085/api/v1/recommend/1@gmail.com",{observe:'response'});
  }

  getAllRecommendationCauses(recommendations)
  {
    return this.http.get<any>("http://cause:8086/api/v1/causeReceiver/"+recommendations,{observe:'response'});
  }

}


