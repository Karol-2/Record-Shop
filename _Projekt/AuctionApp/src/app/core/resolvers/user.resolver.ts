import { inject } from '@angular/core';
import {
  ResolveFn
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/features/services/user.service';
import { User } from 'src/app/shared/models/User.model';

export const UserResolver: ResolveFn<User | null> = (route, state) => {
  const localData: string | null = localStorage.getItem("loggedUser");
  if(localData){
    const user: User = JSON.parse(localData)
    if(user){
      return inject(UserService).getUser(user.id);
    }
  
  }
  return null
  
};

