import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:AuthenticationService,private router : Router){ }
  ngOnInit() {
  }

  openChat():void{
    window.open("http://172.23.238.234:8090")
  }
  search(searchKey) {
    console.log(searchKey);
      this.router.navigate(['search', {search : searchKey}]);
  }
}
