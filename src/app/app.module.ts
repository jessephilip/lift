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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BrandHeaderComponent
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
