import { UserStatus } from "../enums/user-status.enum";

export interface User {
    readonly firstName: string,
    readonly lastName: string,
    readonly age: number,
    readonly status: UserStatus
}