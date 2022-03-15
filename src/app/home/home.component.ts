import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newRes:any;
  employeeName = "Employee name is Vignesh Devan!";//variable declaration
  pageName = "Your profile";
  login_email = "";//declare  the variable as empty
  login_password = "";//declare  the variable as empty
  error = "";
  //object can be created using constructor
  constructor(private common:CommonService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  form_validation(){
    if(this.login_email == ""){
      this.error = "Please Enter your Email";
    }
    else if(this.login_password == ""){
      this.error = "Please Enter your Password";
    }else{
      this.error = "Ready to call Login API";
    }
    this.common.showAlert(this.error);//calling the service from the component
    //print in the console from the variable
    // console.log(this.login_email+" "+this.login_password);
  }
  getHTTPcall(){
    this.http.get("https:reqres.in/api/users?page=2")
    .subscribe(res=>{
      console.log(res)
    })
  }
  postHTTPcall(){
    let postArgs ={
      "name":"morpheus",
      "job":"leader"
    }
    //post request with object
    this.http.post("https:reqres.in/api/users",postArgs)
    .subscribe(res=>{
      console.log(res)
    })
  }
  postHTTPcallWithHeader(){
    let headers = new HttpHeaders(
      {
    "Content-Type":"application/json",
    "user_id":"12",//read the id from local storage
    "token":"fxxgffgcxgfxfcvx43466kkkml",//read the token from local storage
  }
    );
    let postArgs = {
      "name":"morpheus",
      "job":"leader"
    }
    //post request with object
    this.http.post("https:reqres.in/api/users",postArgs,{headers:headers})
    .subscribe(res=>{
      console.log(res);
    })
  }
  getHTTPcallWithHeader(){
    let token:any= sessionStorage.getItem("token");
    let student_id:any=sessionStorage.getItem("student_id");
    let headers = new HttpHeaders(
      {
    "Content-Type":"application/json",
    "student_id":student_id,//read the id from session storage
    "token":token//read the token from session storage
  }
    );
    this.http.get("http://localhost:8080/getStudents",{headers:headers})
    .subscribe(res=>{
      this.newRes = res;
      console.log(res);
    })

  }

}
