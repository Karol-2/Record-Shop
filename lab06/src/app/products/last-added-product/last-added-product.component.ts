import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LastAddedProductService } from '../service/last-added-product.service';

@Component({
  selector: 'app-last-added-product',
  templateUrl: './last-added-product.component.html',
  styleUrls: ['./last-added-product.component.scss']
})
export class LastAddedProductComponent implements OnInit, OnDestroy {
  protected lastAddedProduct: string = '';
  private subscribtion: Subscription = new Subscription();

  public constructor( private lastAddedProductService: LastAddedProductService){}

  public ngOnInit(): void {
    this.subscribtion.add(
      this.lastAddedProductService.getLastProductObservable().subscribe((productName: string)=>{
        this.lastAddedProduct = productName
      })
    )
  }

  public ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
