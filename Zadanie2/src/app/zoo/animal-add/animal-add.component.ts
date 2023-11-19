import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnimalGender } from 'src/app/shared/enums/AnimalGender.enum';
import { AnimalStatus } from 'src/app/shared/enums/AnimalStatus.enum';
import { Animal } from 'src/app/shared/models/Animal.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.scss'],
})
export class AnimalAddComponent  {
  @Input() public animals!: Animal[];
  // Opcje
  protected animalGenderOptions: string[] = Object.values(AnimalGender);
  protected animalStatusOptions: string[] = Object.values(AnimalStatus);

  // Wartości
  protected selectedGender!: AnimalGender;
  protected selectedStatus!: AnimalStatus;
  protected selectedAge!: number;
  protected selectedName!: string;
  protected selectedSpecies!: string;

  // public ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['animals'].currentValue !== changes['animals'].previousValue) {
  //     this.sortAnimals();
  //     console.log("changes:",changes);
  //   }
  // }
  

  private sortAnimals(): void {
    function compare( a: Animal, b: Animal ): number {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }

      return 0;
    }
    
    this.animals.sort( compare );
  }

  private validateObject(obj: Animal): boolean {
    if (typeof obj.status === 'undefined' || typeof obj.gender === 'undefined' || obj.age < 1 ) {
      return false;
    }

    return true;
  }

  protected showData(): void {
    const newAnimal: Animal = {
      id: uuidv4(),
      name: this.selectedName,
      age: this.selectedAge,
      species: this.selectedSpecies,
      status: this.selectedStatus,
      gender: this.selectedGender,
    };

    if (this.validateObject(newAnimal)) {
      this.animals.push(newAnimal);

      this.selectedAge = 1;
      this.selectedGender = AnimalGender.FEMALE;
      this.selectedName = '';
      this.selectedSpecies = '';
      this.selectedStatus = AnimalStatus.HEALTHY;
    }
  }
}
