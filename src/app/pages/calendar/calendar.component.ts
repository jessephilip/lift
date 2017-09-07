import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'app/shared/services/calendar.service';

import { Day } from '../../shared/types/day.model';

import { Days } from '../../shared/values/days.value';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit {

  public today: Date;
  public month: Day[] = [];
  public showMonth = [];
  public monthDisplayed: number;
  public yearDisplayed: number;
  public days = Days;

  constructor(private calendarService: CalendarService) {
    this.today = this.calendarService.today;
  }

  ngOnInit() {
    this.month = this.calendarService.createCalendarMonth(this.today);
    this.showMonth = this.calendarService.createShowMonth(this.today);
    this.setMonthAndYear();
  }

  public changeCalendar (num: number) {
    let currentMonth = this.monthDisplayed;
    currentMonth += num;
    if (currentMonth === -1) {
      this.monthDisplayed = 11;
      this.yearDisplayed -= 1;
    } else if (currentMonth === 12) {
      this.monthDisplayed = 0;
      this.yearDisplayed += 1;
    } else {
      this.monthDisplayed = currentMonth;
    }
    this.month = this.calendarService.createCalendarMonth(new Date(this.yearDisplayed, this.monthDisplayed));
    this.showMonth = this.calendarService.createShowMonth(new Date(this.yearDisplayed, this.monthDisplayed));
  }

  private setMonthAndYear () {
    if (this.month.length <= 0) { return false; }
    this.monthDisplayed = this.month[0].month;
    this.yearDisplayed = this.month[0].year;
  }

}
