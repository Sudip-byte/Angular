import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../class/donor'
import { DonorRegistrationService } from '../registration-service/donor-registration.service'

@Component({
  selector: 'app-registration-donor',
  templateUrl: './registration-donor.component.html',
  styleUrls: ['./registration-donor.component.scss']
})
export class RegistrationDonorComponent implements OnInit {
  
   id='';
   fullname='';
   email='';
   password='';
   phonenumber = '';
   role = '';
   operation = 1;

   donor : Donor= {
    id:undefined,
    name:undefined,
    email:undefined,
    password:undefined,
    phoneNumber:undefined,
    role:undefined,
    operation:undefined

};  

  constructor(private router:Router,private donorx:DonorRegistrationService) 
  {
   
   }

  ngOnInit() {
  }

  register(){
     
    this.donor.id = this.id;
    this.donor.name = this.fullname;
    this.donor.email = this.email;
    this.donor.password = this.password;
    this.donor.phoneNumber = this.phonenumber;
    this.donor.role = this.role;
    this.donor.operation = this.operation;

    this.donorx.saveNewDonor(this.donor).subscribe(response => console.log(response),
    error => console.log(error))
    
    this.router.navigate(["login"]);
}

onItemChange(event){
  console.log(event.target.value);
}


}
