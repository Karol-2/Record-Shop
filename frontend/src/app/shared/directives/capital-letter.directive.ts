import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCapitalLetter]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CapitalLetterDirective, multi: true }
  ]

})
export class CapitalLetterDirective implements Validator {

  public validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value as string;

    if (value && typeof value === "string") {
      const hasCapitalLetter: boolean = value.split('').some((char: string) => char === char.toUpperCase());

      return hasCapitalLetter ? null : { hasCapitalLetter: true };
    }

    return null;
  }

}
