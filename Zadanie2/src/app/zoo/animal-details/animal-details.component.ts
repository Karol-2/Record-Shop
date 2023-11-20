import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Animal } from 'src/app/shared/models/Animal.model';

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

  public ngOnDestroy(): void {
    this.toDelete = true;
    this.deletionConfirmed.emit(this.animal);
  }

  protected changeVisibility(): void{
    this.toDelete = ! this.toDelete;
  }

  protected confirm(): void {
    const index: number = this.animals.indexOf(this.animal);
    if (index !== -1) {
      this.animals.splice(index, 1);
    }
    this.toDelete = false;
  }


}
