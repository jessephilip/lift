import { Days } from '../values/days.value';
import { Months } from '../values/months.value';

export class Day {
  private days = Days;
  private months = Months;

  private _year: number;
  public get year (): number { return this._year; }
  public set year (value: number) { this._year = value; }

  private _month: number;
  public get month (): number { return this._month; }
  public set month (value: number) { this._month = value; }

  private _date: number;
  public get date (): number { return this._date; }
  public set date (value: number) { this._date = value; }

  private _dayNum: number;
  public get dayNum (): number { return this._dayNum; }
  public set dayNum (value: number) { this._dayNum = value; }

  private _dayString: string;
  public get dayString (): string { return this._dayString; }
  public set dayString (value: string) { this._dayString = value; }

  private _dayFull: string;
  public get dayFull (): string { return this._dayFull; }
  public set dayFull (value: string) { this._dayFull = value; }

  private _isToday: boolean;
  public get isToday (): boolean { return this._isToday; }
  public set isToday (value: boolean) { this._isToday = value; }

  // FIXME: setup a way for empty constructor
  constructor (date: Date) {
    this._year = date.getFullYear();
    this._month = date.getMonth();
    this._date = date.getDate();
    this._dayNum = date.getDay();
    this._dayString = this.days[this.dayNum];
    this._dayFull = `${this.dayString}, ${this.months[this.month].month} ${this.date}, ${this.year}`;
    this._isToday = this.compareToToday(date);
  }

  private compareToToday (date: Date): boolean {
    const today = new Date();
    const givenDate = { year: date.getFullYear(), month: date.getMonth(), date: date.getDate() };
    return givenDate.year === today.getFullYear() && givenDate.month === today.getMonth() && givenDate.date === today.getDate();
  }
}
