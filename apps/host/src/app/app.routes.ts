import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'child',
    loadChildren: () =>
      loadRemoteModule('child', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.CcModule),
  },
];
