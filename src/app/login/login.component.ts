import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ValuepassService } from '../value-pass-service/valuepass.service';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email = ''
  private password = ''
  private role = ''

  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private valuepass:ValuepassService,iconRegistry: MatIconRegistry) { }

  ngOnInit() {
  }

  checkLogin(){
    if(this.role=='Donor')
    {
    this.valuepass.saveEmailFromLoginComponent(this.email);
    (this.loginservice.authenticate(this.email, this.password).subscribe(
      data => {
        this.router.navigate(['donorland'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );
    }
    else if(this.role=='Recipient')
    {
      this.valuepass.saveEmailFromLoginComponent(this.email);
      (this.loginservice.authenticate(this.email, this.password).subscribe(
        data => {
          this.router.navigate(['receiverland'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
  
        }
      )
      );
    }
    else if(this.role == 'admin')
    {
      if(this.email=='admin' && this.password=='admin')
      {
        this.router.navigate(['adminland'])
        this.invalidLogin = false
      }
      else
      {
        this.invalidLogin = true;
      }
    }
  }

  onItemChange(event){
    console.log(event.target.value);
  }

}

