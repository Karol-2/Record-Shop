import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../models/Products.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  
  protected errorMessage: string = '';
  protected showError: boolean = false;

  @Input() public products: Product[] = [];
  @Output() protected notify: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  protected addProduct(productName: string): void {
    if (this.checkIsValid(productName)){
      this.showError = false;
      const newProduct: Product = {name: productName, bought: false};
      
      this.products.push(newProduct)
    }
   
  }

  protected checkIsValid(productName: string): boolean {
    if (productName.trim() === '') {
      this.errorMessage = 'Error, próba dodania pustego elementu';
      this.showError = true;
      return false;
    } else if (
      this.products.some((product: Product) => product.name === productName)
    ) {
      this.errorMessage = 'Error, ten produkt jest już na liście';
      this.showError = true;
      return false;
    }
    return true
  }
}
