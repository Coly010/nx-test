import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  protected _assetsUrlRoot = '';

  get assetsUrlRoot() {
    return this._assetsUrlRoot;
  }

  changeAssetsSource(prefix: string): void {
    this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
  }
}
