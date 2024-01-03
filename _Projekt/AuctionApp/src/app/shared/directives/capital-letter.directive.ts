import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCapitalLetter]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CapitalLetterDirective, multi: true }
  ]

})
export class CapitalLetterDirective implements Validator {

  constructor() { }
  public validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (value && typeof value === "string") {
      const hasCapitalLetter = value.split('').some(char => char === char.toUpperCase());

      return hasCapitalLetter ? null : { hasCapitalLetter: true };
    }

    return null;
  }

}
