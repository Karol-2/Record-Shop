import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  protected newProduct: string = '';

  protected addProduct = (productName: string): void => {
    this.newProduct = productName;
    console.log(this.newProduct)
  }

}
