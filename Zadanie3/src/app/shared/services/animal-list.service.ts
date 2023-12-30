import { Injectable } from '@angular/core';
import { Animal } from '../models/Animal.model';
import { animalData } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class AnimalListService {

  private database: Animal[] = [];

  constructor() {
    const storedData = localStorage.getItem('animalData');
    this.database = storedData ? JSON.parse(storedData) : animalData;
  }

  public getAnimalList(): Animal[] {
    console.log(this.database);
    return this.database;
  }

  public addAnimal(animal: Animal): void {
    console.log(animal);
    this.database.push(animal);

    localStorage.setItem('animalData', JSON.stringify(this.database));
  }

  public deleteAnimal(id: string): void {
    const index: number = this.database.findIndex((animal: Animal) => animal.id === id);

    if (index !== -1) {
      console.log(index);
      this.database.splice(index, 1);

      localStorage.setItem('animalData', JSON.stringify(this.database));
    }
  }
}
