import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

const MaterialComponents = [
  MatSlideToggleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatCardModule,
];

@NgModule({
  imports: [CommonModule],
  exports: [MaterialComponents],
})
export class MaterialModule {}
