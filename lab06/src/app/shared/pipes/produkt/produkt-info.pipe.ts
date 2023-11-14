import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produktInfo'
})
export class ProduktInfoPipe implements PipeTransform {
  public transform(name: string, quantity: number): string {
    const pierwsza: string = name.charAt(0).toUpperCase();
    const reszta: string = name.slice(1);
    return `${pierwsza+reszta} (ilość: ${quantity})`;
  }

}
