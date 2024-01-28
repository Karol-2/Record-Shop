import { CanActivateFn } from '@angular/router';

export const leaveGuard: CanActivateFn = () => {
  return confirm('Have you saved all progress?');
};

