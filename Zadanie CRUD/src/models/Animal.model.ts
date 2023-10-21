import { AnimalStatus } from "../enums/AnimalStatus.enum";
import { Food } from "./Food.model";

export interface Animal {
    id: number;
    name: string;
    species: string;
    age: number;
    food: Food
    status: AnimalStatus
}