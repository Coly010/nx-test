import { Injectable } from '@angular/core';
import { Base } from './base';

@Injectable({ providedIn: 'root' })
export class ValueService extends Base {
  add() {
    this.increment();
  }
}
