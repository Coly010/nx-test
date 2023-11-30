import { Injectable } from '@angular/core';
import { BaseService } from 'my-base';

@Injectable({ providedIn: 'root' })
export class ValueService extends BaseService {
  constructor() {
    super();
  }
}
