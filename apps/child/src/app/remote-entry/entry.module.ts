import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

import { remoteRoutes } from './entry.routes';
import { ValueModule } from 'my-value';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, ValueModule, RouterModule.forChild(remoteRoutes)],
})
export class RemoteEntryModule {}
