import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../models/Products.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  protected newProduct: string = '';
  protected errorMessage: string = '';
  protected showError: boolean = false;

  @Input() public products: Product[] = []
  @Output() protected notify: EventEmitter<string> = new EventEmitter<string>

  protected addProduct (productName: string): void {
    if (productName.trim() === ""){
      this.errorMessage = "Error, próba dodania pustego elementu";
      this.showError = true;
      return
    } else if (this.products.some((product: Product) => product.name === productName)){
      this.errorMessage = "Error, ten produkt jest już na liście"
      this.showError = true;
      return
    }
    this.newProduct = productName;
    this.notify.emit(this.newProduct)
  }

  protected closeNotification(): void{
    this.showError = false
  }


}
