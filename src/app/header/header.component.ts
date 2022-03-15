import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogout = true;
  constructor() {

    let token:any = sessionStorage.getItem("token");
    // console.log("token is"+":"+token);
    if(token = ""|| token == undefined){
      this.showLogout = false;
    }else{
      this.showLogout = true;
    }
   }

  ngOnInit(): void {
  }

}
