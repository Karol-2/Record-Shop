import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayPipe } from './pipes/user-display.pipe';



@NgModule({
  declarations: [
    UserDisplayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDisplayPipe
  ]
})
export class SharedModule { }
