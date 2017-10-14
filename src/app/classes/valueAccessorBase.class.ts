// source: http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/

import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessorBase<T> implements ControlValueAccessor {
  private innerValue: T;
  private changed = new Array<(value: T) => void>();
  private touched = new Array<() => void>();

  public get value (): T {
    return this.innerValue;
  };

  public set value (value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }

  public touch () {
    this.touched.forEach(f => f());
  }

  public writeValue(value: T): void {
    this.innerValue = value;
  }

  public registerOnChange(fn: (value: T) => void): void {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: any): void {
    this.touched.push(fn);
  }

}
