import { Injectable } from '@angular/core';
import { Donation } from '../class/donation';
import { Notify } from '../class/notify'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {

  constructor(private http:HttpClient) { }

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private savedDonation:any;
  private sendNotification:any;

  sendDataToDonationDb(donation:Donation)
  {
    console.log("saved donation",donation);
    this.savedDonation = this.http.post<any>('http://donation:8084/api/v1/donation', donation);
    console.log(this.savedDonation);
    return this.savedDonation;
  }

  sentNotification(notify:Notify)
  {
    console.log("sent mail",notify);
    this.sendNotification = this.http.post<any>('http://notification:8082/send-mail',notify);
    console.log(this.sendNotification);
    return this.sendNotification
  }
  
}
