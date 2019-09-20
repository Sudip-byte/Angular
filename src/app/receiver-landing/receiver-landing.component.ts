import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ReceiverLandingService } from '../landing-service/receiver-landing.service'
import { Cause } from '../../app/class/cause'
import { timestamp } from 'rxjs/operators';
import { Router, ChildActivationEnd } from '@angular/router';
import { ValuepassService } from '../value-pass-service/valuepass.service'  
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-receiver-landing',
  templateUrl: './receiver-landing.component.html',
  styleUrls: ['./receiver-landing.component.scss']
})
export class ReceiverLandingComponent implements OnInit {

  id = ''
  name = ''
  receiverId = ''
  causeType = ''
  causeDescription = ''
  timestamp = ''
  location = ''
  email:string

  cause: Cause = {
    
    id:undefined,
    name:undefined,
    receiverId:undefined,
    causeType:undefined,
    causeDescription:undefined,
    timestamp:undefined,
    location:undefined

  } 

  myDate = new Date();
  constructor(private router:Router,private land:ReceiverLandingService,private valuepass:ValuepassService,
    private matsnack:MatSnackBar,private datepipe:DatePipe) { }

  ngOnInit() {
  }
  
  addCause(){
    
    this.cause.id = this.id;
    this.cause.name = this.name;
    this.cause.receiverId = this.valuepass.emailFromLogin;
    this.cause.causeType = this.causeType;
    this.cause.causeDescription = this.causeDescription;
    this.cause.timestamp = this.datepipe.transform(this.myDate, 'yyyy-MM-dd')
    this.cause.location = this.location;

    this.land.saveNewCause(this.cause).subscribe(response => console.log(response),
    error => console.log(error))

    this.matsnack.open("Cause Added")
    
    
  }

  

}
