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

  protected modalContent(product: Product): string {
    return `Czy napewno chcesz usunąć ${product.name} (ilość: ${product.quantity}) ?`;
  }

  protected toggleModal(): void {
    this.showModal = !this.showModal;
  }

  protected deleteItem(product: Product): void {
    const index: number = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.toggleModal();
  }

  protected removeBought(): void {
    this.products = this.products.filter((product: Product) => {
      return product.bought === false;
    });
  }
}
//TODO: naprawić usuwanie nie tego obiektu
//TODO: zmiana działania usuń kupione