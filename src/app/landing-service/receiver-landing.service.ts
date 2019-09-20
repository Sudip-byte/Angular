import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cause } from '../../app/class/cause';


@Injectable({
  providedIn: 'root'
})
export class ReceiverLandingService {

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private savedCause:any;

  constructor(private http:HttpClient) { }

  saveNewCause(cause:Cause)
  {
    console.log("saved cause",cause);
    this.savedCause = this.http.post<any>('http://cause:8086/api/v1/cause', cause);
    console.log(this.savedCause);
    return this.savedCause;
  }



}
