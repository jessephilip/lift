import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private _schedule: BehaviorSubject<any> = new BehaviorSubject(null);
  public schedule$ = this._schedule.asObservable();

  public index: number;

  public seconds: number;
  public milliseconds: number;

  public showCountdown: number;

  private testArray = [
    'push-up',
    'pull-up',
    'dip',
  ];

  constructor() {}

  ngOnInit() {
    this.seconds = 0;
    this.index = 0;
    this.scheduleWatcher();
  }
  private scheduleWatcher = () => this.schedule$.subscribe(value => console.log(value));
  private incrementSeconds () {
    const counter = setInterval(() => this.seconds += 1, 1000);
  }

  private countdown = (startingNumber: number) => {
    this.showCountdown = startingNumber;
    const countdown = setInterval(() => {
      this.showCountdown -= 1;
      if (this.showCountdown === 0) {
        clearInterval(countdown);
        if (this.index < this.testArray.length - 1) {
          this.goToNextExercise();
        }
        this._schedule.next('countdown done');
      }
    }, 1000);
  }

  public activeExercise (): string {
    return this.testArray[this.index];
  }

  public previousExercise (): string {
    return this.testArray[this.index - 1] || 'Warm Up';
  }

  public nextExercise (): string {
    return this.testArray[this.index + 1] || 'Cool Down';
  }

  public goToNextExercise () {
    this.index += 1;
    this.countdown(5);
  }

  public start () {
    this.countdown(3);
  }
}
