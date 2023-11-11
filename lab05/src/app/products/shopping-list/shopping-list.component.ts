import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Products.model';
import data from 'src/app/shared/data/data';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {

  public ngOnInit(): void {
    setTimeout(() => {
      this.products = data;
    }, 2000);
  }

  protected showModal: boolean = false;
  protected products: Product[] = [];
  protected itemToDelete!: Product

  protected modalContent(): string {
    return `Czy napewno chcesz usunąć ${this.itemToDelete.name} (ilość: ${this.itemToDelete.quantity}) ?`;
  }

  protected toggleModal(product: Product): void {
    this.showModal = !this.showModal;
    this.itemToDelete = product;
  }

  protected deleteItem(): void {
    const index: number = this.products.indexOf(this.itemToDelete);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.toggleModal(this.itemToDelete);
  }

  protected removeBought(): void {
    this.products = this.products.filter((product: Product) => {
      return product.bought === false;
    });
  }
}

//TODO: zmiana działania usuń kupione