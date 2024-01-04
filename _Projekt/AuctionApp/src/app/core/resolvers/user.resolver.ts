import { inject } from '@angular/core';
import {
  ResolveFn
} from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

export const UserResolver: ResolveFn<User | null> = (route, state) => {
 return inject(LoggedUserService).getLoggedUser();
  
};

