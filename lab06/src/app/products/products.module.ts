import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    AddProductComponent,
    ProductQuantityComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListComponent, AddProductComponent]
})
export class ProductsModule { }
