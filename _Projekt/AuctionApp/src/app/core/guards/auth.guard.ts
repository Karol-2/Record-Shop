import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { User } from 'src/app/shared/models/User.model';

export function AuthGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CanActivateFn {
  return () => {
    const router: Router = inject(Router)
    let user: User;
    
    const localStorageUser: string | null = localStorage.getItem("loggedUser");
    
    if(localStorageUser){
      try{
        user = JSON.parse(localStorageUser)
        return true;
      } catch {
        router.navigate(["login"])
        return false;
      }
     
    }else{
      router.navigate(["login"])
    }
    return false;
  };
}