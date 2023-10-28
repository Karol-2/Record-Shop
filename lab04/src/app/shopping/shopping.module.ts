import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShoppingListComponent,
    AddProductComponent
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
