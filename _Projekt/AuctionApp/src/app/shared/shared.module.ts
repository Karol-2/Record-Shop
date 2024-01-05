import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayPipe } from './pipes/user-display.pipe';
import { CapitalLetterDirective } from './directives/capital-letter.directive';
import { NumberDirective } from './directives/number.directive';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { PhotoLinkDirective } from './directives/photo-link.directive';



@NgModule({
  declarations: [
    UserDisplayPipe,
    CapitalLetterDirective,
    NumberDirective,
    GoBackButtonComponent,
    PhotoLinkDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDisplayPipe,
    CapitalLetterDirective,
    NumberDirective,
    PhotoLinkDirective,
    GoBackButtonComponent
  ]
})
export class SharedModule { }
