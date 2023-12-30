import { AnimalGender } from "../enums/AnimalGender.enum";
import { AnimalStatus } from "../enums/AnimalStatus.enum";
import { Food } from "./Food.model";

export interface Animal {
    name: string;
    gender: AnimalGender;
    species: string;
    age: number;
    food: Food;
    status: AnimalStatus;
    isEndangered: boolean;
}