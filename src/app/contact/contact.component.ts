import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message:any="";

  constructor() { }

  ngOnInit(): void {
  }

  fromChild(message:any){
    console.log(message);
    this.message = message;
  }

}
