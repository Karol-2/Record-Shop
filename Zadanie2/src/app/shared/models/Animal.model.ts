import { AnimalGender } from "../enums/AnimalGender.enum";
import { AnimalStatus } from "../enums/AnimalStatus.enum";

export interface Animal {
    readonly id: string,
    name: string;
    readonly gender: AnimalGender;
    readonly species: string;
    age: number;
    status: AnimalStatus;
    isEndangered: boolean;
}