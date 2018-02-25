import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/app/app.component.sass']
})
export class AppComponent {
  mainBackground : string;

  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        if (event.url.includes('login')) {
          this.mainBackground = 'loginBackground';
        }
        else {
          this.mainBackground = 'mainBackground';
        }
      });
    }
}
