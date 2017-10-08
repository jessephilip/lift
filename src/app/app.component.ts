import { Component } from '@angular/core';
import { ModalService } from 'app/shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public modals = this.modalService.modals;

  constructor (private modalService: ModalService) {
    console.log(this.modalService.modals);
  }
}
