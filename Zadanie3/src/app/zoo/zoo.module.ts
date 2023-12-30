import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalAddComponent } from './animal-add/animal-add.component';
import { FormsModule } from '@angular/forms';
import { AnimalListService } from '../shared/services/animal-list.service';



@NgModule({
  declarations: [
    AnimalListComponent,
    AnimalDetailsComponent,
    AnimalAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    AnimalListService
  ],
  exports:[
    AnimalListComponent
  ]
})
export class ZooModule { }
