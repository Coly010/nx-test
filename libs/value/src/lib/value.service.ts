import { Injectable } from '@angular/core';
import { Base } from './base';

@Injectable({ providedIn: 'root' })
export class ValueService extends Base {
  constructor() {
    super();
  }
  add() {
    this.increment();
  }
}
