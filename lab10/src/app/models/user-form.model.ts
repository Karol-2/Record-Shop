import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface UserForm {
  readonly firstName: FormControl<string | null>;
  readonly lastName: FormControl<string | null>;
  readonly address: FormArray<FormGroup<AddressForm>>;
}

export interface AddressForm {
  readonly city: FormControl<string | null>;
  readonly zipCode: FormControl<string | null>;
  readonly road: FormControl<string | null>;
  readonly houseNumber: FormControl<number | null>;
}
