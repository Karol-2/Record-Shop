import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/Products.model';
import { ProductStorageService } from '../service/product.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  providers: [ProductStorageService]
})
export class ProductQuantityComponent {

  public constructor(
    private productStorageService: ProductStorageService,
  ){}


  @Input() public product!: Product
  @Input() public products!: Product[]

  protected add(): void{
    this.product.quantity += 1
    this.productStorageService.changeData(this.products)
  }

  protected substract(): void{
    if(this.product.quantity > 1){
      this.product.quantity -= 1
      this.productStorageService.changeData(this.products)
    }
    
  }
}
