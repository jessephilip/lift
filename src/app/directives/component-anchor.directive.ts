import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[component-anchor]'
})
export class ComponentAnchorDirective {

  constructor(public viewContainerRef?: ViewContainerRef) {}

}
