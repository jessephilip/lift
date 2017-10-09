import { ComponentAnchorDirective } from './../../directives/component-anchor.directive';
import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { RegisterComponent } from './../../components/register/register.component';

@Component({
  entryComponents: [
    RegisterComponent
  ],
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild(ComponentAnchorDirective) componentAnchor: ComponentAnchorDirective;

  constructor (private cfr: ComponentFactoryResolver) {}
  ngOnInit () {}

  public signUp (): void {
    // show register modal
    const componentFactory = this.cfr.resolveComponentFactory(RegisterComponent);
    const vcr = this.componentAnchor.viewContainerRef;
    vcr.clear();
    const componentRef = vcr.createComponent(componentFactory);
  }

  public login (): void {
    alert('login');
  }
}
