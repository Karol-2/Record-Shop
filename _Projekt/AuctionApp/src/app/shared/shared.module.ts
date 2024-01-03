import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayPipe } from './pipes/user-display.pipe';
import { CapitalLetterDirective } from './directives/capital-letter.directive';
import { NumberDirective } from './directives/number.directive';



@NgModule({
  declarations: [
    UserDisplayPipe,
    CapitalLetterDirective,
    NumberDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDisplayPipe,
    CapitalLetterDirective,
    NumberDirective
  ]
})
export class SharedModule { }
