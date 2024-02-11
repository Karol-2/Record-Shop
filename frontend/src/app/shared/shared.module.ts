import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayPipe } from './pipes/user-display.pipe';
import { CapitalLetterDirective } from './directives/capital-letter.directive';
import { NumberDirective } from './directives/number.directive';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { PhotoLinkDirective } from './directives/photo-link.directive';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from '../modules/material/material.module';
import { CamelCasePipe } from './pipes/camel-case.pipe';



@NgModule({
  declarations: [
    UserDisplayPipe,
    CapitalLetterDirective,
    NumberDirective,
    GoBackButtonComponent,
    PhotoLinkDirective,
    ModalComponent,
    CamelCasePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserDisplayPipe,
    CamelCasePipe,
    CapitalLetterDirective,
    NumberDirective,
    PhotoLinkDirective,
    GoBackButtonComponent,
    ModalComponent
  ]
})
export class SharedModule { }
