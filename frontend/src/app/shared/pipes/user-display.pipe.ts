import { Pipe, PipeTransform } from '@angular/core';
import { ObjWithUser } from '../models/ObjWithUser.model';

@Pipe({
  name: 'userDisplay'
})
export class UserDisplayPipe implements PipeTransform {

  public transform(userString: string): string {
    const data: ObjWithUser = JSON.parse(userString);   
    const { firstName, lastName }: { firstName: string, lastName: string } = data.user;

    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    
    return "";
  }

}
