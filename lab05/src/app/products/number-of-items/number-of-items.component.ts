import { Component } from '@angular/core';

@Component({
  selector: 'app-number-of-items',
  templateUrl: './number-of-items.component.html',
  styleUrls: ['./number-of-items.component.scss']
})
export class NumberOfItemsComponent {

  protected counter: number = 1

  protected add(): void{
    this.counter += 1;
  }

  protected substract(): void{
    if( this.counter > 1)
    {
      this.counter -= 1;
    }
    
  }
}
