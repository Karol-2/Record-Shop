import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyTextDirective } from './directives/only-text.directive';
import { ZipCodeDirective } from './directives/zip-code.directive';
import { FirstBigLetterDirective } from './directives/first-big-letter.directive';


@NgModule({
  declarations: [
    OnlyTextDirective,
    ZipCodeDirective,
    FirstBigLetterDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OnlyTextDirective,
    ZipCodeDirective,
    FirstBigLetterDirective,
  ]
})
export class SharedModule { }
