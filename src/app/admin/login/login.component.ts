import { LoginData } from './../model/loginData';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormInvalid = false;
  areCredentialsInvalid = false;
  
  constructor(private authenticationService: AuthenticationService) { }

  adminLogin(loginForm:NgForm){
    if (!loginForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(loginForm);
    
  }
  private checkCredentials(loginForm: NgForm){
    const loginData = new LoginData(loginForm.value.username, loginForm.value.password);
    if(!this.authenticationService.authenticate(loginData)){
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }

  ngOnInit(): void {
  }

}
