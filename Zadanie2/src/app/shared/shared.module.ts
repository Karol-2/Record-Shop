import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { AnimalDataDisplayPipe } from './pipes/animal-data-display.pipe';



@NgModule({
  declarations: [
    ModalComponent,
    AnimalDataDisplayPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ModalComponent,
    AnimalDataDisplayPipe
  ]
})
export class SharedModule { }
