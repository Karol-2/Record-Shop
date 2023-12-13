import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressForm, UserForm } from '../models/user-form.model';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  userForm = new FormGroup<UserForm>({
    firstName: new FormControl<string>('',[Validators.required, Validators.minLength(2)]),
    lastName: new FormControl<string>('',[Validators.required, Validators.minLength(2)]),
    address: new FormArray<FormGroup<AddressForm>>([])
  })

  constructor() { }

  addAddress(){
    this.userForm.controls.address?.push(new FormGroup<AddressForm>({
      city: new FormControl<string>(''),
      zipCode: new FormControl<string>(''),
      road: new FormControl<string>(''),
      houseNumber: new FormControl<number>(0),

    }))
  }

  removeAddress(index: number){
    this.userForm.controls.address?.removeAt(index)
  }
}
