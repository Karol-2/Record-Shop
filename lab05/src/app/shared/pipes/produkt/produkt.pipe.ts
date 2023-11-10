import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produkt'
})
export class ProduktPipe implements PipeTransform {

  public transform(productName: string, number: number): string {

    const firstLetter: string = productName.charAt(0).toUpperCase()
    const restOfName: string = productName.slice(1)
    
    const result: string = firstLetter+ restOfName + " (ilość: " + number + ")"
    
    return result;
  }

}
