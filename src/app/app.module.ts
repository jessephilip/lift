import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { environment } from '../environments/environment';

// custom components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
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
import { ModalComponent } from './components/modal/modal.component';
import { TimerComponent } from './components/timer/timer.component';
import { RegisterComponent } from './components/register/register.component';

// services
import { AuthenticationService } from './shared/services/authentication.service';
import { DatabaseService } from './shared/services/database.service';
import { ModalService } from 'app/shared/services/modal.service';

// directives
import { ComponentAnchorDirective } from './directives/component-anchor.directive';
import { VeilComponent } from './components/veil/veil.component';
import { CustomInputComponent } from './components/customInput/customInput.component';

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
    DateSuffixPipe,
    ModalComponent,
    TimerComponent,
    RegisterComponent,
    ComponentAnchorDirective,
    VeilComponent,
    CustomInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    DatabaseService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
