import { User } from "../models/User.model";
import { v4 as uuidv4 } from 'uuid';

export const userData: User[] = [
    {
        id: uuidv4(),
        firstName: "Karol",
        lastName: "Krawczykiewicz",
        email: "k-krawczykiewicz@wp.pl",
        password: "Karol1"
    },
    {
        id: uuidv4(),
        firstName: "Admin",
        lastName: "Testowy",
        email: "test@test.pl",
        password: "Test1"
    }
]