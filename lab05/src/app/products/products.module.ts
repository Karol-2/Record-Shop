import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { NumberOfItemsComponent } from './number-of-items/number-of-items.component';



@NgModule({
  declarations: [
    ShoppingListComponent,
    AddProductComponent,
    NumberOfItemsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListComponent, AddProductComponent]
})
export class ProductsModule { }
