import { Animal } from "../models/Animal.model";
import { TErrorMessage } from "../types/ErrorMessage.type";

export class Zoo {
  private animals: Animal[];

  public constructor() {
    this.animals = [];
  }

  public addAnimal(newAnimal: Animal): void | TErrorMessage {
    const animalsInSpecies: Animal[] = this.getAnimalsOfSpecies(newAnimal.species);

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
      return `ERROR: An animal with name ${newAnimal.name} in ${newAnimal.species} species already exists!`;
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

  public getAnimalByNameAndSpecies(name: string, species: string): Animal | TErrorMessage {
    const animalsFound: Animal[] = this.animals.filter(
      (animal: Animal) =>
        animal.name.toLowerCase() === name.toLowerCase() &&
        animal.species.toLowerCase() === species.toLowerCase()
    );

    if(animalsFound.length === 1){
      return animalsFound[0]
    } else {
      return `ERROR: An animal with this name ${name} in ${species} species doesn't exists`
    }
  }

  public updateAnimal(name: string, species: string, newData: Partial<Animal>): void{
    const animal: unknown = this.getAnimalByNameAndSpecies(name, species);
    if ( typeof animal === "object"){
      Object.assign(animal!, newData)
    } 
  }

  public deleteAnimal(name: string, species: string): void | TErrorMessage {
    const index: number = this.animals.findIndex(
      (animal: Animal) =>
        animal.name.toLowerCase() === name.toLowerCase() &&
        animal.species.toLowerCase() === species.toLowerCase()
    );

    if (index !== -1) {
      this.animals.splice(index, 1);
    } else {
      return `ERROR: An animal with this name ${name} in ${species} species doesn't exists`
    }

  }
}
