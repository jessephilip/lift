import { Component } from '@angular/core';

// services
import { DatabaseService } from './shared/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor (private dbService: DatabaseService) {
    console.log(dbService.getDatabase());
  }
}
