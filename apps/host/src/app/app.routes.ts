import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'child',
    loadChildren: () =>
      loadRemoteModule('child', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'cc',
    loadChildren: () => import('./cc/cc.module').then((m) => m.CcModule),
  },
];
