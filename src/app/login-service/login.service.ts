import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  checkCredentials(loginType : string, credentials) : void {
    console.log(loginType);
    if (loginType == 'Customer') {
      this.verifyCustomer(credentials);
    }
    else if (loginType == 'Employee') {
      this.verifyCustomer(credentials);
    }
  }
  verifyCustomer(credentials) {
    console.log(credentials);
  }
  verifyEmployee(credentials) {
    console.log(credentials);
  }
}
