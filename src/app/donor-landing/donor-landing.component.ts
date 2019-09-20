import { Component, OnInit } from '@angular/core';
import { Cause } from '../class/cause'
import { ValuepassService } from '../value-pass-service/valuepass.service'

@Component({
  selector: 'app-donor-landing',
  templateUrl: './donor-landing.component.html',
  styleUrls: ['./donor-landing.component.scss']
})
export class DonorLandingComponent implements OnInit {

  private causes : Array<Cause>;
  private recommendations : any;
  private recommendationCauses: Array<Cause>;
  
  constructor(private causeservice:ValuepassService) { this.causes = []; }

  ngOnInit() {
    this.fetchCauses();
    this.recommendCauses();
  }

  private fetchCauses()
  {
    this.causeservice.getAllCauses().subscribe
    (
      (res:any) => 
      {
        this.causes = res.body;
        console.log("got",this.causes);
      }
    )
  }

  private recommendCauses()
  {
    this.causeservice.getAllRecommendations().subscribe
    (
      (res:any) => 
      {
        this.recommendations = res.body;
        console.log("got",this.recommendations);
        
        for(let rec of this.recommendations)
        {
          console.log("hello",rec);
          this.causeservice.getAllRecommendationCauses(rec).subscribe
          (
            (res:any) => 
            {
              this.recommendationCauses = res.body;
              console.log("got-1",this.recommendationCauses);
            }
          );
        }
      }
    )
  }


}
