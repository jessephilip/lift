import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss']
})
export class CalendarCellComponent implements OnInit {

  @Input() day;

  constructor() { }

  ngOnInit() {}

}
