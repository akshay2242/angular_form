import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../../model/loginData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mockedUser = new LoginData('admin', 'admin');
  isAuthenticated = false;


  constructor(private router:Router) { }

  authenticate(loginData: LoginData): boolean {
    if(this.checkCredentials(loginData)){
      this.isAuthenticated = true;
      this.router.navigate(['admin/home'])
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(loginData:LoginData): boolean{
    return this.checkUsername(loginData.getUsername()) && this.checkPassword(loginData.getPassword())
  }
  private checkUsername(username: string): boolean{
    return username === this.mockedUser.getUsername();
  }
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }
}
