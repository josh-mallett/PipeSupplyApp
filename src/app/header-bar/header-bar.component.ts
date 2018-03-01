import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['../../styles/header/header-bar.component.sass']
})
export class HeaderBarComponent implements OnInit {
  showMenuIcon: boolean;
  showMenu: boolean;
  menuIconClasses: string;
  sideMenuClasses: string;
  url: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.url = activatedRoute.snapshot.url.join('/');
  }
  ngOnInit() {
    this.setMenuIcon();
  }
  setMenuIcon() {
    let firstSegment = this.url.split('/')[0];
    if (firstSegment === 'customer') {
      this.showMenuIcon = true;
    }
    else {
      this.showMenuIcon = false;
    }
  }
  toggleMenu() {
    if (this.showMenuIcon) {
      if (this.showMenu) {

      }
      else {
        
      }
    }
  }

}
