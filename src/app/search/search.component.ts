import { Component, OnInit } from '@angular/core';
import { SearchService} from '../search.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  causes:[];
  searchCause;
  constructor(private searchservice:SearchService ,private route: ActivatedRoute ) { }
  ngOnInit() {
    this.searchCauses();
  }
  private searchCauses()
 {
  this.route.params.subscribe((data: any) => {
    this.searchCause = data.search;
    console.log(this.searchCause);
    this.searchservice.searchAllCauses(this.searchCause).subscribe
    (
      (res:any) =>
      {
        this.causes = res.body;
        console.log("got",this.causes);
      }
    )
  });
 }
 }