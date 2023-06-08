import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PerrosService } from '../services/perros.service';

@Injectable({ providedIn: 'root' })
export class razaPerrosResolver implements Resolve<any>  {

  constructor(
    private transferState: TransferState,
    private perrosService: PerrosService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  resolve: ResolveFn<any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> => {


    const paramId = route.params['id'];
    const questionMarkIndex = paramId.indexOf('?');
    const slicedId = paramId.slice(0, questionMarkIndex);
    const id = Number(slicedId);

    const KEY = makeStateKey<string>('raza-perro-' + id)

    if (this.transferState.hasKey(KEY))
    {

      const storedKey = this.transferState.get(KEY, null);
      this.transferState.remove(KEY);

      if (storedKey) { return of(JSON.parse(storedKey)); }
      else { return of(storedKey); }

    }
    else
    {

      const perro = this.perrosService.dogListSignal()[id]

      if (isPlatformServer(this.platformId)) { this.transferState.set(KEY, JSON.stringify(perro)); }

      return of(perro);

    }

  };

}
