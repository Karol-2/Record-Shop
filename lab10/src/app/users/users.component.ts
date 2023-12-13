import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, NgForm } from '@angular/forms';
import { AddressForm, UserForm } from '../models/user-form.model';
import { UserFormService } from '../services/user-form.service';
import { LocalStorageService } from '../services/local-storage.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  userForm: FormGroup<UserForm> = this.userFormService.userForm;

  constructor( private userFormService: UserFormService,
    private localStorageService: LocalStorageService){}

  get addresses(){
    return this.userForm.controls.address as FormArray<FormGroup<AddressForm>>;
  }

  ngOnInit(): void {
    console.log(this.userForm, this.addresses)
  }

  addAddress(): void{
    return this.userFormService.addAddress()
  }

  removeAddress(index: number): void{
    return this.userFormService.removeAddress(index);
  }

  save(): void{
    console.log(this.userForm);
    const values = this.userForm.value
    const newUser: User = {
      firstName: values.firstName!,
      lastName: values.lastName!,
      address: values.address?,
    };
    this.localStorageService.addUser(newUser)
  }



}
