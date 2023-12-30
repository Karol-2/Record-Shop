import { CanActivateFn } from '@angular/router';

export const LeavePageGuard: CanActivateFn = (route, state) => {
  return confirm('Czy zapisano wszystkie zmiany');
};
