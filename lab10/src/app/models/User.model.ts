

export interface User {
  readonly firstName: string;
  readonly lastName: string;
  readonly address: Address;
}

export interface Address {
  readonly city: string;
  readonly zipCode: string;
  readonly road: string;
  readonly houseNumber: number;
}
