import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { ProduktInfoPipe } from './pipes/produkt/produkt-info.pipe';



@NgModule({
  declarations: [
     AlertComponent,
     ModalComponent, 
     ProduktInfoPipe],
  imports: [
    CommonModule
  ], exports: [
    AlertComponent, ModalComponent, ProduktInfoPipe
  ]
})
export class SharedModule { }
