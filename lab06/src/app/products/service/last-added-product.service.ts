import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastAddedProductService {

 // eslint-disable-next-line @typescript-eslint/no-empty-function
 public constructor() { }

 private lastAddedProductSubject: Subject<string> = new Subject<string>();

 public getLastProductObservable(): Subject<string> {
  return this.lastAddedProductSubject;
 }
 public setLastAddedProduct(productName: string): void {
  this.lastAddedProductSubject.next(productName);
  console.log(this.getLastProductObservable())
}
}
