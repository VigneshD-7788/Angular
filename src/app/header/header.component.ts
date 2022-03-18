import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogout = true;
  @Input() name:any; //get the data from the parent component
  @Input() menuName:any; //will be received from parent component
  @Output() toParent = new EventEmitter; //send the data to parent
  message:any="";

  pushToParent(){
    this.toParent.emit(this.message); //data will be sent to parent
  }
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
