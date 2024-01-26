import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    if(value && value.length > 1){

      const firstLetter: string = value.charAt(0).toUpperCase();
      const rest: string = value.slice(1).toLowerCase();

      return firstLetter + rest;

    } 
    return value?.toUpperCase();
    
  }

}
