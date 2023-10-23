import { TErrorMessage } from "../types/ErrorMessage.type";
import { Animal } from "./Animal.model";

export interface CrudOperations {
    addAnimal(animal: Animal): void;
    getAnimals(): Animal[];
    getAnimalByNameAndSpecies(name: string, species: string): Animal | TErrorMessage;
    updateAnimal(name: string, species: string, newData: Partial<Animal>): void | TErrorMessage;
    deleteAnimal(name: string, species: string): void;
  }