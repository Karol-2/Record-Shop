import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { ProduktPipe } from './pipes/produkt/produkt.pipe';



@NgModule({
  declarations: [AlertComponent, ModalComponent, ProduktPipe],
  imports: [
    CommonModule
  ], exports: [
    AlertComponent, ModalComponent
  ]
})
export class SharedModule { }
