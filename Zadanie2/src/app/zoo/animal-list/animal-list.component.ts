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

  public ngOnInit(): void {
    this.animals = animalData;
  }
}
