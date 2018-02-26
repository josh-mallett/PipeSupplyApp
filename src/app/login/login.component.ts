import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/do';
import { capitalizeFirstChar } from '../helperFunctions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/login/login.component.sass']
})
export class LoginComponent implements OnInit {
  loginType: string;
  constructor(private activatedRoute: ActivatedRoute) { }

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

  onSubmit(form) {
    console.log(form);
  }
}
