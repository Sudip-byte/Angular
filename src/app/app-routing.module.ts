import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import { RegistrationDonorComponent } from './registration-donor/registration-donor.component';
import { RegistrationReceiverComponent } from './registration-receiver/registration-receiver.component';
import { DonorLandingComponent } from './donor-landing/donor-landing.component';
import { ReceiverLandingComponent } from './receiver-landing/receiver-landing.component';
import { EditDonorComponent } from './edit-donor/edit-donor.component';
import { EditReceiverComponent } from './edit-receiver/edit-receiver.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { DonationLandingComponent } from './donation-landing/donation-landing.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: '', component: HomeComponent},
  { path: 'donor', component: RegistrationDonorComponent},
  { path: 'receiver', component: RegistrationReceiverComponent},
  { path: 'donorland', component: DonorLandingComponent },
  { path: 'receiverland', component: ReceiverLandingComponent},
  { path: 'editdonor', component: EditDonorComponent},
  { path: 'editreceiver', component: EditReceiverComponent},
  { path: 'adminland', component: AdminLandingComponent},
  { path: 'donationland', component: DonationLandingComponent},
  {path: 'search' , component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
