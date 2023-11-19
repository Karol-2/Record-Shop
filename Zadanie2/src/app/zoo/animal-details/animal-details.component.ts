import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/shared/models/Animal.model';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent {

  @Input() public animal!: Animal;
  @Input() public animals!: Animal[];
  protected toDelete: boolean = false;

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
