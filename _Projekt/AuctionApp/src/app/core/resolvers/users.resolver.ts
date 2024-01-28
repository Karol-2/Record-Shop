import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from 'src/app/features/services/user.service';
import { User } from 'src/app/shared/models/User.model';

export const usersResolver: ResolveFn<User[] | null> = () => {
  return inject(UserService).getAllUsers();
   
};
