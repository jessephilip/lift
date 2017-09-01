import { Component, OnInit } from '@angular/core';

// services
import { AuthenticationService } from '../../shared/services/authentication.service';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public welcomeMessage = 'Welcome';
  public loggedIn: boolean;

  constructor (private auth: AuthenticationService, private dbService: DatabaseService) {
    // console.log('db service: ', dbService.getDatabase());
  }

  ngOnInit() {
    this.auth.loginState().subscribe(user => {
      if (user && user.uid) {
        this.loggedIn = true;
        this.welcomeMessage = `Welcome ${user.displayName}`;
      } else {
        this.loggedIn = false;
        this.welcomeMessage = 'Welcome';
      }
    });
  }

  public googleLogin () {
    this.auth.googleLogin().then(status => {
      console.log('status: ', status);
      this.loggedIn = true;
      this.welcomeMessage = `Welcome ${status.user.displayName}`;
    });
  }

  public logout () {
    this.auth.logout().then(status => {
      console.log(status);
      this.welcomeMessage = 'Welcome';
    });
  }

}
