import { Component } from '@angular/core';
import { BaseService } from 'my-base';

@Component({
  selector: 'nx-test-lazy',
  template: `host value:: {{ valueService.assetsUrlRoot }}`,
})
export class LazyComponent {
  constructor(public valueService: BaseService) {
    console.log('lazy:', valueService);
  }
}
