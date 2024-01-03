import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User.model';

@Pipe({
  name: 'userDisplay'
})
export class UserDisplayPipe implements PipeTransform {

  transform(userString: string): string {
    const data = JSON.parse(userString);

    if (data && data.user) {
      const { firstName, lastName } = data.user;

      if (firstName && lastName) {
        return `${firstName} ${lastName}`;
      }
    }
    return "";
  }

}
