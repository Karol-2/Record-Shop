import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalDataDisplay',
})
export class AnimalDataDisplayPipe implements PipeTransform {
  public transform(text: string): string {
    if (text) {
      const firstLetter: string = text.charAt(0).toUpperCase();
      const rest: string = text.slice(1).toLowerCase();

      return firstLetter + rest;
    }
    
    return "";
  }
}
