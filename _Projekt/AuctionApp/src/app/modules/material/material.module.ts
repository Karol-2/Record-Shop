import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents = [
  MatSlideToggleModule,
  MatButtonModule
]

@NgModule({
  imports: [
    CommonModule,

  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
