import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CcRoutingModule } from './cc-routing.module';
import { CcComponent } from './cc.component';

@NgModule({
  declarations: [CcComponent],
  imports: [CommonModule, CcRoutingModule],
})
export class CcModule {}
