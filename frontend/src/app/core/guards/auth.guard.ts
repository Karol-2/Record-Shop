import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

export const authGuard: CanActivateFn = (
) => {

  return inject(LoggedUserService).getLoggedUser()
    ? true
    : inject(Router).navigate(['login']);
};