import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { AnimalDataDisplayPipe } from './pipes/animal-data-display.pipe';
import { PopupComponent } from './components/popup/popup.component';



@NgModule({
  declarations: [
    ModalComponent,
    AnimalDataDisplayPipe,
    PopupComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ModalComponent,
    AnimalDataDisplayPipe,
    PopupComponent
  ]
})
export class SharedModule { }
