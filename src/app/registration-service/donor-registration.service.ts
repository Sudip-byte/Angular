import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Donor } from '../../app/class/donor';


@Injectable({
  providedIn: 'root',
})


export class DonorRegistrationService {

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private savedDonor:any;
  private editedDonor:any;

  constructor(private http:HttpClient) {
   }


  saveNewDonor(donor:Donor)
  {
    console.log("saved donor",donor);
    this.savedDonor = this.http.post<any>('http://donor:8080/api/v1/donor', donor);
    console.log(this.savedDonor);
    return this.savedDonor;
  }


  editDonor(editDonorData:any):any
  {
    this.editedDonor = this.http.put<any>('http://donor:8080/api/v1/donor/${editDonorData.id}',editDonorData);
    console.log(this.editedDonor);
    return this.editedDonor;
   
  }

  getDonor(id:any):any
  {
    console.log("email",id)
    return this.http.get('http://donor:8080/api/v1/donors/'+id);
  }

}
