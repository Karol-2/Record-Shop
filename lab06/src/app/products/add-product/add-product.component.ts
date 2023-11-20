import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../shared/models/Products.model';
import { ProductStorageService } from '../service/product-storage.service';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  providers: [ProductStorageService, ShoppingListService]
})
export class AddProductComponent {
  
  public constructor(
    private shoppingListService: ShoppingListService
  ){}
  
  protected errorMessage: string = '';
  protected showError: boolean = false;

  @Input() public products: Product[] = [];
 
  protected addProduct(productName: string): void {
   this.shoppingListService.addProduct(productName, this.products)
   
  }

  protected checkIsValid(productName: string): boolean {
   return this.shoppingListService.checkIsProductValid(productName, this.products);
  }
}
