import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService{

  private productList: Product[] = []
  constructor(){}

  get products(): Product[] { 
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
   this.productList =  this.productList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  }

  
}
