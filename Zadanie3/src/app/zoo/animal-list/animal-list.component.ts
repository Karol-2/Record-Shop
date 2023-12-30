import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/shared/models/Animal.model';
import { AnimalListService } from 'src/app/shared/services/animal-list.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
  providers: [AnimalListService]
})
export class AnimalListComponent implements OnInit {

  constructor(private animalListService: AnimalListService, private router: Router,){}

  protected animals: Animal[] = [];

  public deletedAnimal: Animal | null = null;
  public showSuccessModal: boolean = false;

  public ngOnInit(): void {
    this.animals = this.animalListService.getAnimalList();
    
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

  protected showDetails(id: String): void{
    this.router.navigate(["details",id])
  }

  
}
