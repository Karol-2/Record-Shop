import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appZipCode]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ZipCodeDirective,  multi: true}
  ]
})
export class ZipCodeDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.value) {
      const valid = new RegExp('^[0-9]{2}-[0-9]{3}$', 'i').test(control.value);
      return valid ? null : { zipCodeFormat: true }
    }

    return null;
  }

}
