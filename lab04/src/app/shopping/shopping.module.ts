import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    ShoppingListComponent,
    AddProductComponent,
    AlertComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingModule { }
