import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogout = true;
  @Input() name:any; //get the data from the parent component
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
