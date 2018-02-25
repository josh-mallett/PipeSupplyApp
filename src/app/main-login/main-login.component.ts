import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['../../styles/main-login/main-login.component.sass']
})
export class MainLoginComponent implements OnInit {
  router: Router;
  linksAnimation: string = 'links-enter';
  constructor(router: Router) {
    this.router = router;
  }
  ngOnInit() {
  }
  goToPage(pageName) {
    this.linksAnimation = 'links-leave';
    setTimeout(() => {
      this.router.navigate( ['login', pageName] );
    }, 350);
  }
}
