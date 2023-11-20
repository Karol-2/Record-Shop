import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService{

  private productList: Product[] = []
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public constructor(){}

  public get products(): Product[] { 
    return this.productList;
  }

  public loadData(): void{
    this.productList = JSON.parse(localStorage.getItem('products')!) || [];
    this.orderData()
  }

  public changeData(newProducts: Product[]): void{
    localStorage.setItem('products',JSON.stringify(newProducts))
    this.orderData()
    
  }

  private orderData(): void{
   this.productList =  this.productList.sort((a: Product,b: Product) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  }

  
}
