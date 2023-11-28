import { Injectable } from '@angular/core';

@Injectable()
export class Base {
  private _value = 0;

  get value() {
    return this._value;
  }

  increment() {
    this._value++;
  }
}
