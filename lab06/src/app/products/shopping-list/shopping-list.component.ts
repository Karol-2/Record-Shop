import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Products.model';
import { ProductStorageService } from '../service/product-storage.service';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ProductStorageService, ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  public constructor(
    private shoppingListService: ShoppingListService
  ){}

  public ngOnInit(): void {
    this.shoppingListService.loadData();
    this.products = this.shoppingListService.getProducts();
  }

  protected showModal: boolean = false;
  protected products: Product[] = [];
  protected productsBought: Product[] = [];
  protected itemToDelete!: Product

  protected checkOff(product: Product): void{
  this.shoppingListService.checkOffProduct(product, this.products);
  }

  protected modalContent(): string {
    return this.shoppingListService.getModalContent() }


  protected toggleModal(product: Product): void {
    this.shoppingListService.toggleModal(product);
    this.showModal = this.shoppingListService.isModalVisible();
    this.itemToDelete = product;
  }

  protected deleteItem(): void {
    this.shoppingListService.deleteItem();
    this.showModal = this.shoppingListService.isModalVisible();
  }

  protected removeBought(): void {
    this.shoppingListService.removeBought();
    this.productsBought = this.shoppingListService.getProductsBought();
  
}

}