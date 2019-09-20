import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receiver } from '../class/receiver';
import { ReceiverRegistrationService } from '../registration-service/receiver-registration.service';

@Component({
  selector: 'app-registration-receiver',
  templateUrl: './registration-receiver.component.html',
  styleUrls: ['./registration-receiver.component.scss']
})
export class RegistrationReceiverComponent implements OnInit {



  id='';
  fullname='';
  email='';
  password='';
  phonenumber = '';
  role = '';
  operation = 1;

  receiver : Receiver= {
   id:undefined,
   name:undefined,
   email:undefined,
   password:undefined,
   phoneNumber:undefined,
   role:undefined,
   operation:undefined

};  

 constructor(private router:Router,private receiverx:ReceiverRegistrationService) 
 {
  
  }

 ngOnInit() {
 }

 register(){
    
   this.receiver.id = this.id;
   this.receiver.name = this.fullname;
   this.receiver.email = this.email;
   this.receiver.password = this.password;
   this.receiver.phoneNumber = this.phonenumber;
   this.receiver.role = this.role;
   this.receiver.operation = this.operation;

   this.receiverx.saveNewReceiver(this.receiver).subscribe(response => console.log(response),
   error => console.log(error))
   
   this.router.navigate(["login"]);
}
onItemChange(event){
  console.log(event.target.value);
}




}
