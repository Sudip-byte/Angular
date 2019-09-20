import { Component, OnInit } from '@angular/core';
import { ValuepassService } from '../value-pass-service/valuepass.service'
import { Donation } from '../class/donation'
import { Notify } from '../class/notify'
import { DonationServiceService } from '../donation-service/donation-service.service'
import { from } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-donation-landing',
  templateUrl: './donation-landing.component.html',
  styleUrls: ['./donation-landing.component.scss']
})
export class DonationLandingComponent implements OnInit {

  constructor(private valuepass:ValuepassService,private donationx:DonationServiceService,private matsnack:MatSnackBar) { }

  ngOnInit() {
  }

  public causename = this.valuepass.causename; 
  public causedescription = this.valuepass.causedesc;
  public causeid = this.valuepass.id;
  public receiverId = this.valuepass.receiverId;
  public timestamp = this.valuepass.timestamp;
  public location = this.valuepass.location;

  amount = 1000;

  donation: Donation ={

  donationId:undefined,
  receiverId:undefined,
  donorId:undefined,
  causeId:undefined,
  amount:undefined
  
  }  

  notify: Notify ={

    name:undefined,
    cause:undefined,
    email:undefined,
    amount:undefined

  }

  

  sendDataToDonationMicroservice()
  {

    window.open('https://pages.razorpay.com/pl_DHZkbxyM548ZAM/view', 'winname', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=900,height=800');
    this.donation.donorId = this.valuepass.emailFromLogin;
    this.donation.causeId = this.causeid;
    this.donation.donationId = this.donation.donorId + this.donation.causeId;
    this.donation.receiverId = this.receiverId;
    this.donation.amount = this.amount;

    //for notification
    
    this.notify.name = "Donation";
    this.notify.cause = this.causename;
    this.notify.email = this.valuepass.emailFromLogin;
    this.notify.amount = this.amount;

    this.donationx.sendDataToDonationDb(this.donation).subscribe(response => console.log(response),
    error => console.log(error))

    this.matsnack.open("Successfully Donated")

    this.donationx.sentNotification(this.notify).subscribe(response => console.log(response),
    error => console.log(error))


  }





}
