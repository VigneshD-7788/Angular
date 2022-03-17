import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cssClassName = "class1";

  peopleList= [
    {name:"Vignesh" ,'age':23},
    {name:"Max" ,'age':24},
    {name:"James" ,'age':25},
    {name:"Ben" ,'age':26},
  
]

  constructor() { }

  ngOnInit(): void {
  }
  changeCssColor(className:any){
    this.cssClassName = className; //change the variable value as method arguments
  }

}
