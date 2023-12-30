import { CanActivateFn } from '@angular/router';

export const LeavePageGuard: CanActivateFn = (route, state) => {
  console.log(route);
  console.log(state);
  
  
  return  window.confirm("Czy napewno chcesz wyjść? Upewnij się, że dodałeś obiekt za pomocą przycisku 'Dodaj'!");
};
