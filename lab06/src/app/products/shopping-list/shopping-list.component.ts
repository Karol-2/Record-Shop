import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Products.model';
import { ProductStorageService } from '../service/product.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ProductStorageService]
})
export class ShoppingListComponent implements OnInit {

  public constructor(
    private productStorageService: ProductStorageService,
  ){}

  public ngOnInit(): void {
    this.productStorageService.loadData()
    this.products = this.productStorageService.products
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
      this.productStorageService.changeData(this.products)
    }
    this.toggleModal(this.itemToDelete);
  }

  protected removeBought(): void {
    this.products = this.products.filter((product: Product) => {
      return product.bought === false;
    });
  }
}