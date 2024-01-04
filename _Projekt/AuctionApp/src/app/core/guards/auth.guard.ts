import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // console.log('guard status: ', inject(TokenService).authenticated());

  return inject(LoggedUserService).getLoggedUser()
    ? true
    : inject(Router).navigate(['login']);
};