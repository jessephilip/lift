import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

// services
import { AuthenticationService } from './shared/services/authentication.service';
import { DatabaseService } from './shared/services/database.service';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { BrandHeaderComponent } from './components/brand-header/brand-header.component';
import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { TodayComponent } from './pages/today/today.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { HistoryComponent } from './pages/history/history.component';
import { FoodComponent } from './pages/food/food.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CalendarCellComponent } from './components/calendar-cell/calendar-cell.component';
import { DateSuffixPipe } from './shared/pipes/date-suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BrandHeaderComponent,
    ActivityBarComponent,
    TodayComponent,
    NotFoundComponent,
    ScheduleComponent,
    CalendarComponent,
    GoalsComponent,
    HistoryComponent,
    FoodComponent,
    ProfileComponent,
    CalendarCellComponent,
    DateSuffixPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
