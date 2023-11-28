import { NxWelcomeComponent } from './nx-welcome.component';

import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'child',
    loadChildren: () =>
      loadRemoteModule('child', './Module').then((m) => m.RemoteEntryModule),
  },
];
