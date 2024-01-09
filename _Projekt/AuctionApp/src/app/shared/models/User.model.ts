import { UserType } from "../enums/UserType";

export interface User{
    readonly id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: UserType
}