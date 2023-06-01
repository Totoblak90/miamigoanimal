import { ResolveFn } from '@angular/router';

export const stateTransferResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
