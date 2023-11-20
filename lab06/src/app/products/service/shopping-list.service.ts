import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Products.model';
import { ProductStorageService } from './product-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnInit {

  public constructor(private productStorageService: ProductStorageService){}
  
  public ngOnInit(): void {
    this.loadData();
  }

  private products: Product[] = [];
  private productsBought: Product[] = [];
  private showModal: boolean = false;
  private itemToDelete!: Product;

  public loadData(): void {
    this.productStorageService.loadData()
    this.products = this.productStorageService.products
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductsBought(): Product[] {
    return this.productsBought;
  }

  public toggleModal(product: Product): void {
    this.showModal = !this.showModal;
    this.itemToDelete = product;
  }

  public isModalVisible(): boolean {
    return this.showModal;
  }

  public getModalContent(): string {
    return `Czy na pewno chcesz usunąć ${this.itemToDelete.name} (ilość: ${this.itemToDelete.quantity}) ?`;
  }

  public deleteItem(): void {
    const index: number = this.products.indexOf(this.itemToDelete);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.productStorageService.changeData(this.products)
    }
    this.toggleModal(this.itemToDelete);
  }

  public removeBought(): void {
    this.products = this.products.reduce((prev: Product[], curr: Product) => {
      if (curr.bought) {
        this.productsBought.push(curr);
        return prev;
      }
      return [...prev, curr];
    }, []);
  }

  public addQunatity(product: Product, products: Product[]): void{
    const index: number = products.indexOf(product);
    products[index].quantity += 1;
    this.productStorageService.changeData(products)
  }

  public minusQunatity(product: Product,  products: Product[]): void{
    const index: number = products.indexOf(product);
    if(products[index].quantity > 1){
      products[index].quantity -= 1;
      this.productStorageService.changeData(products);
    }
  }
}
