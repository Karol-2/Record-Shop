import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/shared/models/Animal.model';
import { AnimalListService } from 'src/app/shared/services/animal-list.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnDestroy {

  @Input() public animal!: Animal;
  @Input() public animals!: Animal[];
  @Output() public deletionConfirmed: EventEmitter<Animal> = new EventEmitter<Animal>();
  protected toDelete: boolean = false;

  public constructor(private animalListService: AnimalListService, private router: Router){}

  public ngOnDestroy(): void {
    this.toDelete = true;
    this.deletionConfirmed.emit(this.animal);
    this.router.navigate(["/"])
  }

  protected changeVisibility(): void{
    this.toDelete = ! this.toDelete;
  }

  protected confirm(): void {
    this.animalListService.deleteAnimal(this.animal.id)
    this.toDelete = false;

  }


}
