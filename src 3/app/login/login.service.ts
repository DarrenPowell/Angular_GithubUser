import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  isLoggedIn = false;
  login(username, password){       
    if(username === "jason" && password === "123")
        return this.isLoggedIn = true; 
    else
        this.isLoggedIn = false;
        return this.isLoggedIn;
  }

  logout(){ 
    this.isLoggedIn = false;
  return this.isLoggedIn;
  }
}