import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFirstBigLetter]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FirstBigLetterDirective, multi: true }
  ]

})
export class FirstBigLetterDirective implements Validator {
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.value) {
      const firstChar: string = control.value[0];
      if (firstChar == firstChar.toUpperCase()){
        return null
      }
      return { firstBigLetter: true }
    }

    return null;
  }


}
