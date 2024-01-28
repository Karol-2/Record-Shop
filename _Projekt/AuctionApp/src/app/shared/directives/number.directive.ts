import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNumber]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NumberDirective, multi: true }
  ]
})
export class NumberDirective implements Validator{

  public validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value as string;

    if (value && typeof value === "string") {
      const containsNumber: boolean = /\d/.test(value);

      return containsNumber ? null : { containsNumber: true };
    }

    return null;
  }

}
