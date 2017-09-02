import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components for routing
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { TodayComponent } from '../pages/today/today.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ScheduleComponent } from '../pages/schedule/schedule.component';
import { CalendarComponent } from '../pages/calendar/calendar.component';
import { GoalsComponent } from '../pages/goals/goals.component';
import { HistoryComponent } from '../pages/history/history.component';
import { FoodComponent } from '../pages/food/food.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const appRoutes: Routes = [
  { path: 'landingpage', component: LandingPageComponent, children: [
    { path: 'today', component: TodayComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'goals', component: GoalsComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'food', component: FoodComponent },
    { path: 'profile', component: ProfileComponent },
  ]},
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
