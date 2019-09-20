import { Component, OnInit } from '@angular/core';
import { ReceiverRegistrationService } from '../registration-service/receiver-registration.service'
import { ValuepassService } from '../value-pass-service/valuepass.service'

@Component({
  selector: 'app-edit-receiver',
  templateUrl: './edit-receiver.component.html',
  styleUrls: ['./edit-receiver.component.scss']
})
export class EditReceiverComponent implements OnInit {

  editReceiverData:any=[];

  constructor(private registrationservice:ReceiverRegistrationService,private valuepass:ValuepassService) { }

  ngOnInit() {
    console.log("email",this.valuepass.emailFromLogin);
    
    this.registrationservice.getReceiver(this.valuepass.emailFromLogin).subscribe(data => 
      {this.editReceiverData=data});

      console.log(this.editReceiverData)
  }

  editReceiver()
  {
    this.registrationservice.editReceiver(this.editReceiverData).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }

}
