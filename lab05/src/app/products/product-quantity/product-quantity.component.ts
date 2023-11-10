import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/Products.model';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {

  @Input() public product!: Product

  protected add(): void{
    this.product.quantity += 1
  }

  protected substract(): void{
    if(this.product.quantity > 1){
      this.product.quantity -= 1
    }
    console.log("minus")
  }
}
