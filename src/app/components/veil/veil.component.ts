import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-veil',
  templateUrl: './veil.component.html',
  styleUrls: ['./veil.component.scss']
})
export class VeilComponent implements OnInit {
  @Input('veilClick') veilClick;
  @HostListener('click') clicked () {
    if (this.veilClick) {
      this.veilClick();
    }
  }

  constructor() { }

  ngOnInit() {}

}
