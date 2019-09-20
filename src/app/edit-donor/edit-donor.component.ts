import { Component, OnInit } from '@angular/core';
import { DonorRegistrationService } from '../registration-service/donor-registration.service'
import { ValuepassService } from '../value-pass-service/valuepass.service'

@Component({
  selector: 'app-edit-donor',
  templateUrl: './edit-donor.component.html',
  styleUrls: ['./edit-donor.component.scss']
})
export class EditDonorComponent implements OnInit {

  editDonorData:any=[];

  constructor(private registrationservice:DonorRegistrationService,private valuepass:ValuepassService) { }

  ngOnInit() 
  {
    console.log("email",this.valuepass.emailFromLogin);
    
    this.registrationservice.getDonor(this.valuepass.emailFromLogin).subscribe(data => 
      {this.editDonorData=data});

      console.log(this.editDonorData)
  }

  editDonor()
  {
    this.registrationservice.editDonor(this.editDonorData).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }

}
