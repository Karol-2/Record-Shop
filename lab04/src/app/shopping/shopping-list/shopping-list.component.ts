import { Component } from '@angular/core';
import { Product } from '../models/Products.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  protected products: Product[] = [{ name: 'Mleko', bought: false }];

  protected showModal: boolean = false;
  protected itemToDelete: Product = { name: '', bought: false };

  protected openModal(item: Product): void {
    this.showModal = true;
    this.itemToDelete = item;
  }

  protected deleteItem(result: boolean,): void {
    const index: number = this.products.indexOf(this.itemToDelete);
    if (index !== -1 && result) {
      this.products.splice(index, 1);
      
    }
    this.showModal = false;
  }



  protected removeBought(): void {
    this.products = this.products.filter((product: Product) => {
      return product.bought === false;
    });
  }

}
