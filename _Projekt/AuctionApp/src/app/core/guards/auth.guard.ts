import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  return inject(LoggedUserService).getLoggedUser()
    ? true
    : inject(Router).navigate(['login']);
};