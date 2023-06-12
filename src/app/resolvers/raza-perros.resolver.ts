import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PerrosService } from '../services/perros.service';

@Injectable({ providedIn: 'root' })
export class razaPerrosResolver implements Resolve<Observable<any>>  {

  constructor(
    private transferState: TransferState,
    private perrosService: PerrosService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  resolve: ResolveFn<any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> => {


    const paramId = route.params['id'];

    if (paramId === undefined) {
      this.router.navigate(['/perros'])
      return of(null);
    }

    const id = Number(paramId);

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

      const perro = this.perrosService.dogListSignal()[id];

      if (perro)
      {
        if (isPlatformServer(this.platformId)) { this.transferState.set(KEY, JSON.stringify(perro)); }

        return of(perro);
      }

      else

      {
        this.router.navigate(['perros'])
        return of(null);
      }


    }

  };

}
