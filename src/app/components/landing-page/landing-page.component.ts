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

  constructor (private auth: AuthenticationService, private dbService: DatabaseService) {
    console.log('auth service: ', auth.login());
    console.log('db service: ', dbService.getDatabase());
  }

  ngOnInit() {}

}
