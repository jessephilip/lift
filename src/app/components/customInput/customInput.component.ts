import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { ElementBase } from 'app/classes/elementBase.class';
@Component({
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CustomInputComponent, multi: true }
  ],
  // tslint:disable-next-line:component-selector
  selector: 'custom-input',
  templateUrl: './customInput.component.html',
  styleUrls: ['./customInput.component.scss']
})
export class CustomInputComponent extends ElementBase<string> implements OnInit {
  @ViewChild(NgModel) model: NgModel;

  // validation
  @Input() maxlength;
  @Input() minlength;
  @Input() max;
  @Input() min;
  @Input() name;
  @Input() required;

  // styling
  @Input() icon;
  @Input() placeholder;
  @Input() type;

  // conditionals
  @Input() showValidation;

  public validity: boolean;
  public activeValidation: string;
  public hasFocus: boolean;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) private validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) private asyncValidators: Array<any>,
    private renderer: Renderer2
  ) {
    super(validators, asyncValidators);
  }

  ngOnInit() {
    this.model.statusChanges.subscribe(value => {
      this.validity = value === 'VALID';
      // console.log(this.model);
      this.activeValidation = this.buildActiveValidationString(this.model.errors);
    });
    this.errorHandling();
  }

  private errorHandling () {
    if (typeof this.stringToInt(this.max) !== 'number') {
      throw new Error('Max requires an integer to be passed to it.');
    }

    if (typeof this.stringToInt(this.min) !== 'number') {
      throw new Error('Min requires an integer to be passed to it.');
    }

    if (typeof this.stringToInt(this.maxlength) !== 'number') {
      throw new Error('Maxlength requires an integer to be passed to it.');
    }

    if (typeof this.stringToInt(this.minlength) !== 'number') {
      throw new Error('Minlength requires an integer to be passed to it.');
    }

    if (!this.name) {
      throw new Error('App-Input requires a string to be passed to the name attribute.');
    }
  }

  private stringToInt (arg: string) {
    return parseInt(arg, 10);
  }

  private buildActiveValidationString (errorsObject): string {
    const validationArray: string[] = [];
    for (const key in errorsObject) {
      if (errorsObject[key]) {
        validationArray.push(key);
      }
    }
    return validationArray.join(' ');
  }

  public focusChange (arg: string) {
    if (arg === 'on') {
      this.hasFocus = true;
    } else {
      this.hasFocus = false;
    }
  }
}
