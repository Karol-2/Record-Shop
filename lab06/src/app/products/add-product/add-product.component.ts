import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../shared/models/Products.model';
import { ProductStorageService } from '../service/product-storage.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  providers: [ProductStorageService]
})
export class AddProductComponent {
  
  public constructor(
    private productStorageService: ProductStorageService,
  ){}
  
  protected errorMessage: string = '';
  protected showError: boolean = false;

  @Input() public products: Product[] = [];
  @Output() protected notify: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  protected addProduct(productName: string): void {
    if (this.checkIsValid(productName)){
      this.showError = false;
      const newProduct: Product = {name: productName, bought: false, quantity: 1};
      
      this.products.push(newProduct)
      this.productStorageService.changeData(this.products)
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
