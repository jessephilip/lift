import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {

  public activities = [
    { name: 'today', icon: 'fa fa-calendar-check-o' },
    { name: 'schedule', icon: 'fa fa-list-alt' },
    { name: 'calendar', icon: 'fa fa-calendar' },
    { name: 'goals', icon: 'fa fa-star-o' },
    { name: 'profile', icon: 'fa fa-user' },
    { name: 'food log', icon: 'fa fa-cutlery' },
    { name: 'history', icon: 'fa fa-history' },
  ];

  constructor() { }

  ngOnInit() {}

}
