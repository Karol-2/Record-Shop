import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { NumberDirective } from './number.directive';

@Directive({
  selector: '[appPhotoLink]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PhotoLinkDirective, multi: true }
  ]
})
export class PhotoLinkDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    const isValid = /^(http:\/\/|https:\/\/).+.(jpg|jpeg|png|gif)$/i.test(value);

    return isValid ? null : { invalidImageLink: true };

}
}