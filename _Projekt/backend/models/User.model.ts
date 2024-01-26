import { UserType } from "../enums/UserType";

export interface User{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: UserType;
   
}