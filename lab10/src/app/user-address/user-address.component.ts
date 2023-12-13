import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressForm } from '../models/user-form.model';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent {
  @Input() addressForm!: FormGroup<AddressForm>;

}
