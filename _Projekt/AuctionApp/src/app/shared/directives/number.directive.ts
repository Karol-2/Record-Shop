import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNumber]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NumberDirective, multi: true }
  ]
})
export class NumberDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (value && typeof value === "string") {
      const containsNumber = /\d/.test(value);

      return containsNumber ? null : { containsNumber: true };
    }

    return null;
  }

}
