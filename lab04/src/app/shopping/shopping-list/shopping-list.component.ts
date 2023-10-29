import { Component } from '@angular/core';
import { Product } from '../models/Products.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  protected products: Product[] = [{ name: 'Mleko', bought: false }];

  protected removeProduct(product: Product): void {
    const index: number = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  protected addReceivedProduct(productName: string): void {
    const newProduct: Product = { name: productName, bought: false };
    this.products.push(newProduct);
  }

  protected removeBought(): void {
    this.products = this.products.filter((product: Product) => {
      return product.bought === false;
    });
  }
}
