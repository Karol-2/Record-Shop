import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Products.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  protected newProduct: string = '';

  @Output() protected notify: EventEmitter<string> = new EventEmitter<string>

  protected addProduct = (productName: string): void => {
    if (productName.trim() === ""){
      console.log("Error, próba dodania pustego elementu")
      return
    }

    this.newProduct = productName;
    console.log(this.newProduct)
    this.notify.emit(this.newProduct)
  }

}
