import { Component, OnInit } from '@angular/core';

// services
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public welcomeMessage = 'Welcome';
  public loggedIn: boolean;

  constructor (private authService: AuthenticationService) { }

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

  public googleLogin () {
    this.authService.googleLogin().then(status => {
      this.loggedIn = true;
      this.welcomeMessage = `Welcome ${status.user.displayName}`;
    });
  }

  public logout () {
    this.authService.logout().then(status => this.welcomeMessage = 'Welcome');
  }

}
