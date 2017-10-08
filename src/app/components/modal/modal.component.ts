import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modal;
  @Input() closeOnVeilClick: boolean;

  constructor() { }

  ngOnInit() {}

  public veilClick (e): void {
    e.stopPropagation();
    if (!this.closeOnVeilClick) { return; }
    console.log('veil clicked');
  }

}
