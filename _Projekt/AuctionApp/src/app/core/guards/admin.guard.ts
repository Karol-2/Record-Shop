import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

export const adminGuard: CanActivateFn = (
) => {

  return inject(LoggedUserService).getLoggedUser()?.userType === "ADMIN"
    ? true
    : inject(Router).navigate(['403']);
};
