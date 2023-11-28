import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: OnlyTextDirective,  multi: true}
  ]
})
export class OnlyTextDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.value) {
      const valid = new RegExp('^[a-zA-Z]+$', 'i').test(control.value);
      return valid ? null : { onlyLetters: true }
    }

    return null;
  }


}
