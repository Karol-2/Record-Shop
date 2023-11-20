import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/Products.model';
import { ProductStorageService } from '../service/product-storage.service';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  providers: [ProductStorageService, ShoppingListService]
})
export class ProductQuantityComponent {

  public constructor(
    private shoppingListService: ShoppingListService
  ){}


  @Input() public product!: Product
  @Input() public products!: Product[]

  protected add(): void{
    this.shoppingListService.addQunatity(this.product, this.products);
  }

  protected substract(): void{
   this.shoppingListService.minusQunatity(this.product, this.products);
  }
}
