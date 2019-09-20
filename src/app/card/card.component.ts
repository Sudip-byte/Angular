import { Component, OnInit, Input } from '@angular/core';
import { Cause } from '../class/cause';
import { Router } from '@angular/router';
import { ValuepassService } from '../value-pass-service/valuepass.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() cause: Cause;

  constructor(private router:Router,private valuepass:ValuepassService) { }

  ngOnInit() {
  }

  private donateTo(name,description,id,receiverId,timestamp,location)
  {
    this.valuepass.getDataFromDonorLanding(name,description,id,receiverId,timestamp,location)
    this.router.navigate(['donationland']);
  }

}
