import { Component, OnInit } from '@angular/core';

// services
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-brand-header',
  templateUrl: './brand-header.component.html',
  styleUrls: ['./brand-header.component.scss']
})
export class BrandHeaderComponent implements OnInit {

  public welcomeMessage = 'Welcome';
  public loggedIn = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    const user = this.authService.user;
      if (user && user.uid) {
        this.loggedIn = true;
        this.welcomeMessage = `Welcome ${user.displayName}`;
      } else {
        this.loggedIn = false;
        this.welcomeMessage = 'Welcome';
      }
  }
}
