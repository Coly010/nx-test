import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from './base.service';

@NgModule({
  imports: [CommonModule],
  providers: [BaseService],
})
export class BaseModule {}
