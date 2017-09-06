import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  public currentDate: number;
  constructor() {}

  ngOnInit() {
    this.currentDate = Date.now();
  }

  /**
   * Opens the dialog to create a new note for the current date.
   *
   * @memberof TodayComponent
   */
  public addNote (): void {
    console.log('note added.');
  }
}
