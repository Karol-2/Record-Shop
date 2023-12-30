import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { AnimalDataDisplayPipe } from './pipes/animal-data-display.pipe';
import { PopupComponent } from './components/popup/popup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DisabledDirective } from './directives/disabled.directive';



@NgModule({
  declarations: [
    ModalComponent,
    AnimalDataDisplayPipe,
    PopupComponent,
    NavbarComponent,
    DisabledDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ], 
  exports: [
    ModalComponent,
    AnimalDataDisplayPipe,
    PopupComponent,
    NavbarComponent,

  ]
})
export class SharedModule { }
