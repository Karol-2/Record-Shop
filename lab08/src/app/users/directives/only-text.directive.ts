import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: OnlyTextDirective,  multi: true}
  ]
})
export class OnlyTextDirective {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.value) {
      const valid = new RegExp('[A-Za-z]', 'i').test(control.value);
      return valid ? null : { onlyLetters: false }
    }

    return null;
  }


}
