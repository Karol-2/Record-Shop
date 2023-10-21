import { Animal } from "../models/Animal.model";
import { TErrorMessage } from "../types/ErrorMessage.type";

export class Zoo {
  private animals: Animal[];

  public constructor() {
    this.animals = [];
  }

  public addAnimal(newAnimal: Animal): void | TErrorMessage {
    const animalsInSpecies: Animal[] = this.animals.filter(
      (animal: Animal) =>
        animal.species.toLowerCase() === newAnimal.species.toLowerCase()
    );

    const animalExists: boolean = animalsInSpecies.reduce(
      (prev: boolean, curr: Animal) => {
        if (curr.name.toLowerCase() === newAnimal.name.toLowerCase()) {
          prev = true;
        }
        return prev;
      },false);

    if (!animalExists) {
      this.animals.push(newAnimal);
    } else {
      return "An animal with this name in this species already exists!";
    }
  }

  public getAnimals(): Animal[] {
    return this.animals;
  }

  public getAnimalsOfSpecies(species: string): Animal[] {
    return this.animals.filter(
      (animal: Animal) => animal.species.toLowerCase() === species.toLowerCase()
    );
  }

  public getAnimalByNameAndSpecies(name: string, species: string): Animal {
    return this.animals.filter(
      (animal: Animal) =>
        animal.name.toLowerCase() === name.toLowerCase() &&
        animal.species.toLowerCase() === species.toLowerCase()
    )[0];
  }

  public deleteAnimal(name: string, species: string): void {
    const index: number = this.animals.findIndex(
      (animal: Animal) =>
        animal.name.toLowerCase() === name.toLowerCase() &&
        animal.species.toLowerCase() === species.toLowerCase()
    );

    if (index !== -1) {
      this.animals.splice(index, 1);
    }

  }
}
