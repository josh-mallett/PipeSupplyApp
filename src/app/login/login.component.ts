import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/do';

import { capitalizeFirstChar } from '../helperFunctions';
import { LoginService } from '../login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/login/login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  loginType: string;
  constructor(private activatedRoute: ActivatedRoute, private _LoginService: LoginService) { }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let type = params.get('type');
      if (type != null && type != undefined && type != '') {
        if (type == 'customer' || type == 'employee') {
          type = capitalizeFirstChar(type);
          this.loginType = type;
        }
        else {
          this.loginType = 'Customer';
        }
      }
      else {
        this.loginType = 'Customer';
      }
    });
  }

  onSubmit() {
    this._LoginService.checkCredentials(this.loginType, this.loginForm.value);
  }

}
