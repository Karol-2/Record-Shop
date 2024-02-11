import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhotoLink]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PhotoLinkDirective, multi: true }
  ]
})
export class PhotoLinkDirective implements Validator {

  public validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value as string;

    if ( value === '') {
      return null;
    }

    const isValid: boolean = /^(http:\/\/|https:\/\/).+.(jpg|jpeg|png|gif)$/i.test(value);

    return isValid ? null : { invalidImageLink: true };

  }
}