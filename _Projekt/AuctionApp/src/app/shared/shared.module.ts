import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayPipe } from './pipes/user-display.pipe';
import { CapitalLetterDirective } from './directives/capital-letter.directive';
import { NumberDirective } from './directives/number.directive';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { PhotoLinkDirective } from './directives/photo-link.directive';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from '../modules/material/material.module';



@NgModule({
  declarations: [
    UserDisplayPipe,
    CapitalLetterDirective,
    NumberDirective,
    GoBackButtonComponent,
    PhotoLinkDirective,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserDisplayPipe,
    CapitalLetterDirective,
    NumberDirective,
    PhotoLinkDirective,
    GoBackButtonComponent,
    ModalComponent
  ]
})
export class SharedModule { }
