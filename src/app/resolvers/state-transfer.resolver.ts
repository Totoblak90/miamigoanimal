import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateTransferResolver implements Resolve<any>  {

  constructor(
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  resolve: ResolveFn<any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> => {

    console.log(this.transferState)


    const KEY = makeStateKey<string>(state.url.slice(1))

    if (this.transferState.hasKey(KEY))
    {

      const storedKey = this.transferState.get(KEY, null);
      this.transferState.remove(KEY);

      console.log(this.transferState)
      return of(storedKey);

    }
    else
    {

      if (isPlatformServer(this.platformId)) { this.transferState.set(KEY, state.url.slice(1)); }

      console.log(this.transferState)
      return of(true);

    }

  };

}
