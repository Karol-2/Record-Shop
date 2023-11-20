import { Component, OnInit} from '@angular/core';
import { Animal } from 'src/app/shared/models/Animal.model';
import { animalData } from 'src/app/shared/data/data';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  protected animals: Animal[] = [];

  public deletedAnimal: Animal | null = null;
  public showSuccessModal: boolean = false;

  public ngOnInit(): void {
    this.animals = animalData;
  }

  protected handleDeletionConfirmation(animal: Animal): void {
    this.deletedAnimal = animal;
    this.showSuccessModal = true;

    setTimeout(() => {
      this.showSuccessModal = false;
    }, 3000);
  }

  protected onAnimalsUpdated(updatedAnimals: Animal[]): void {
    this.animals = updatedAnimals;
  }
}
