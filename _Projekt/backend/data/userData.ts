import { UserType } from "../enums/UserType";
import { User } from "../models/User.model";
import { v4 as uuidv4 } from 'uuid';

export const userData: User[] = [
    {
        id: uuidv4(),
        firstName: "Karol",
        lastName: "Krawczykiewicz",
        email: "karol@karol.pl",
        password: "Karol1",
        userType: UserType.USER
    },
    {
        id: uuidv4(),
        firstName: "Admin",
        lastName: "Testowy",
        email: "test@test.pl",
        password: "Test1",
        userType: UserType.ADMIN
    },
    {
        id: uuidv4(),
        firstName: "User2",
        lastName: "Example2",
        email: "example2@karol.pl",
        password: "Karol1",
        userType: UserType.USER
    },
    {
        id: uuidv4(),
        firstName: "User3",
        lastName: "Example3",
        email: "example3@karol.pl",
        password: "Karol1",
        userType: UserType.USER
    },
]