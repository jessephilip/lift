// source: http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/

import { NgModel, Validator, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ValueAccessorBase } from './valueAccessorBase.class';
import {
  AsyncValidatorArray,
  ValidatorArray,
  ValidationResult,
  message,
  validate
} from './validate.class';

export abstract class ElementBase<T> extends ValueAccessorBase<T> {
  protected abstract model: NgModel;

  constructor (private validatorArray: ValidatorArray, private asyncValidatorArray: AsyncValidatorArray) {
    super();
  }

  protected validate (): Observable<ValidationResult> {
    return validate (this.validatorArray, this.asyncValidatorArray) (this.model.control);
  }

  protected get invalid (): Observable<boolean> {
    return this.validate().map(v => Object.keys(v || {}).length > 0);
  }

}
