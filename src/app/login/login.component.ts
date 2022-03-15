import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login_email = "";//declare  the variable as empty
  login_password = "";//declare  the variable as empty
  error = "";

  constructor(private http:HttpClient,private common:CommonService) { }

  ngOnInit(): void {
  }
  form_validation(){
    if(this.login_email == ""){
      this.error = "Please Enter your Email";
    }
    else if(this.login_password == ""){
      this.error = "Please Enter your Password";
    }else{
      let postArgs ={
            "email": this.login_email, 
            "password":this.login_password
      }
      this.http.post("http://localhost:8080/studentLogin",postArgs)
    .subscribe((res:any)=>{
      sessionStorage.setItem("token",res["token"]);
      sessionStorage.setItem("student_id",res["student_id"]);
      
      console.log(res);
    },
    error=>{console.log(error["error"]["message"]);
    this.common.showAlert(error["error"]["message"]);
  })
    
      
    }
    //print in the console from the variable
    // console.log(this.login_email+" "+this.login_password);
  }
  // postHTTPcall(){
  //   let postArgs ={
  //     "email": "jam456@gmail.com", 
  //     "password":"jsbcac#%"
  //   }
  //   //post request with object
  //   this.http.post("http://localhost:8080/studentLogin",postArgs)
  //   .subscribe(res=>{
  //     console.log(res);
  //   })
  // }

}
