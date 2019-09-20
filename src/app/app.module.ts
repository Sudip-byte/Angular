import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-htpp-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material'
import { HomeComponent } from './home/home.component'

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RegistrationDonorComponent } from './registration-donor/registration-donor.component';
import { RegistrationReceiverComponent } from './registration-receiver/registration-receiver.component';
import { DonorLandingComponent } from './donor-landing/donor-landing.component';
import { ReceiverLandingComponent } from './receiver-landing/receiver-landing.component';


import { EditDonorComponent } from './edit-donor/edit-donor.component';
import { EditReceiverComponent } from './edit-receiver/edit-receiver.component';
import {DonorRegistrationService}from './registration-service/donor-registration.service';

import {MatCardModule} from '@angular/material/card';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { CardComponent } from './card/card.component';
import { DonationLandingComponent } from './donation-landing/donation-landing.component';
import { Donation } from './class/donation';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    RegistrationDonorComponent,
    RegistrationReceiverComponent,
    DonorLandingComponent,
    ReceiverLandingComponent,
    EditDonorComponent,
    EditReceiverComponent,
    AdminLandingComponent,
    CardComponent,
    DonationLandingComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [
    DonorRegistrationService,
    ReceiverLandingComponent,
    LoginComponent,
    Donation,
    DatePipe,
  {  
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true
  },
  {
    provide:MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}
  },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
