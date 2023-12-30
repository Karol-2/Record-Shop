import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { AnimalDataDisplayPipe } from './pipes/animal-data-display.pipe';
import { PopupComponent } from './components/popup/popup.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    ModalComponent,
    AnimalDataDisplayPipe,
    PopupComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ModalComponent,
    AnimalDataDisplayPipe,
    PopupComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
