import { CanActivateFn } from '@angular/router';

export const leaveGuard: CanActivateFn = (route, state) => {
  return confirm('Have you save all progress?');
};

