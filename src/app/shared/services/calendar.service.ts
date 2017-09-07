import { OnInit } from '@angular/core';

import { Day } from '../types/day.model';

import { Months } from '../values/months.value';
import { Days } from '../values/days.value';

export class CalendarService implements OnInit {

  private months = Months;
  private days = Days;

  public today = new Date();

  constructor () {}

  ngOnInit(): void {}

  public getMonthToString (month: number): string {
    return this.months[month].month;
  }

  public getDayToString (day: number): string {
    return this.days[day];
  }

  public isLeapYear (year: number): boolean {
    return year % 4 === 0;
  }

  public createCalendarMonth (date: Date) {
    const dateArray = [];

    for (let i = 0; i < this.months[date.getMonth()].numDays; i++) {
      dateArray.push(new Day(new Date(date.getFullYear(), date.getMonth(), i + 1)));
    }
    return dateArray;
  }

  public createShowMonth (date: Date) {
    const month = this.createCalendarMonth(date);
    const blankDays = month[0].dayNum;
    for (let i = 0; i < blankDays; i++) {
      month.unshift('');
    }
    return month;
  }
}
