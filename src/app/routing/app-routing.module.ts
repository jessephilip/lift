import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components for routing
import { LandingPageComponent } from '../components/landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: 'landingpage', component: LandingPageComponent },
  { path: '**', component: LandingPageComponent },

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
