import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GatosService } from '../services/gatos.service';

@Injectable({ providedIn: 'root' })
export class razaGatosResolver implements Resolve<Observable<any>>  {

  constructor(
    private transferState: TransferState,
    private gatosService: GatosService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  resolve: ResolveFn<any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> => {


    const id: string = route.params['gatoId'];

    if (id === undefined) {
      this.router.navigate(['/gatos'])
      return of(null);
    }

    const KEY = makeStateKey<string>('raza-gato-' + id)

    if (this.transferState.hasKey(KEY))
    {

      const storedKey = this.transferState.get(KEY, null);
      this.transferState.remove(KEY);

      if (storedKey) { return of(JSON.parse(storedKey)); }
      else { return of(storedKey); }

    }
    else
    {

      const gato = this.gatosService.catListSignal()[id];

      if (gato)
      {
        if (isPlatformServer(this.platformId)) { this.transferState.set(KEY, JSON.stringify(gato)); }

        return of(gato);
      }

      else
      {
        this.router.navigate(['gatos'])
        return of(null);
      }


    }

  };

}
