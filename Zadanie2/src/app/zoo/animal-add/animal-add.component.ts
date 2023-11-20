import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AnimalGender } from 'src/app/shared/enums/AnimalGender.enum';
import { AnimalStatus } from 'src/app/shared/enums/AnimalStatus.enum';
import { Animal } from 'src/app/shared/models/Animal.model';
import { v4 as uuidv4 } from 'uuid';
import { AnimalDataDisplayPipe } from 'src/app/shared/pipes/animal-data-display.pipe';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.scss'],
  providers: [AnimalDataDisplayPipe],
})
export class AnimalAddComponent implements OnChanges {
  @Input() public animals!: Animal[];
  @Output() public animalsUpdated: EventEmitter<Animal[]> = new EventEmitter<
    Animal[]
  >();

  public constructor(private dataDisplayPipe: AnimalDataDisplayPipe) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes['animals'].firstChange) {
      this.animals = this.sortAnimals(this.animals);
    }
  }

  // Opcje
  protected animalGenderOptions: string[] = Object.values(AnimalGender);
  protected animalStatusOptions: string[] = Object.values(AnimalStatus);

  // Wartości
  protected selectedGender!: AnimalGender;
  protected selectedStatus!: AnimalStatus;
  protected selectedAge!: number;
  protected selectedName!: string;
  protected selectedSpecies!: string;

  private sortAnimals(animalsList: Animal[]): Animal[] {
    function compare(a: Animal, b: Animal): number {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    }
    const result: Animal[] = animalsList.sort(compare);

    return result;
  }

  private validateObject(obj: Animal): boolean {
    if (
      typeof obj.status === 'undefined' ||
      typeof obj.gender === 'undefined' ||
      typeof obj.name === 'undefined' ||
      typeof obj.species === 'undefined' ||
      obj.age < 1
    ) {
      return false;
    }

    return true;
  }

  protected addAnimal(): void {
    const newAnimal: Animal = {
      id: uuidv4(),
      name: this.dataDisplayPipe.transform(this.selectedName),
      age: this.selectedAge,
      species: this.selectedSpecies,
      status: this.selectedStatus,
      gender: this.selectedGender,
    };

    if (this.validateObject(newAnimal)) {
      this.animals = [...this.animals, newAnimal];

      this.animalsUpdated.emit([...this.animals]);
      this.clearInputs();
    }
  }

  private clearInputs(): void {
    this.selectedAge = 1;
    this.selectedGender = AnimalGender.FEMALE;
    this.selectedName = '';
    this.selectedSpecies = '';
    this.selectedStatus = AnimalStatus.HEALTHY;
  }
}
