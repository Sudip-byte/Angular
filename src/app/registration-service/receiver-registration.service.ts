import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Receiver } from '../../app/class/receiver';


@Injectable({
  providedIn: 'root',
})


export class ReceiverRegistrationService {

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private savedReceiver:any;
  private editedReceiver:any;

  constructor(private http:HttpClient) {
   }

  saveNewReceiver(receiver:Receiver)
  {
    console.log("saved receiver",receiver);
    this.savedReceiver = this.http.post<any>('http://receiver:8084/api/v1/owner', receiver);
    console.log(this.savedReceiver);
    return this.savedReceiver;
  }

  editReceiver(editReceiverData:any):any
  {
    this.editedReceiver= this.http.put<any>('http://receiver:8084/api/v1/owner/${editReceiverData.id}',editReceiverData);
    console.log(this.editedReceiver);
    return this.editedReceiver;
   
  }

  getReceiver(id:any):any
  {
    console.log("email",id)
    return this.http.get('http://receiver:8084/api/v1/owner/'+id);
  }

}
