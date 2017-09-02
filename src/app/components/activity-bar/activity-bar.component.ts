import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {

  public activities = [
    { name: 'today', icon: 'fa fa-calendar-check-o', route: 'today' },
    { name: 'schedule', icon: 'fa fa-list-alt', route: 'schedule' },
    { name: 'calendar', icon: 'fa fa-calendar', route: 'calendar' },
    { name: 'goals', icon: 'fa fa-star-o', route: 'goals' },
    { name: 'profile', icon: 'fa fa-user', route: 'profile' },
    { name: 'food log', icon: 'fa fa-cutlery', route: 'food' },
    { name: 'history', icon: 'fa fa-history', route: 'history' },
  ];

  constructor() { }

  ngOnInit() {}

}
