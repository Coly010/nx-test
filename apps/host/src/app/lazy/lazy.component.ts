import { Component } from '@angular/core';
import { ValueService } from 'my-value';

@Component({
  selector: 'nx-test-lazy',
  template: `host value:: {{ valueService.assetsUrlRoot }}`,
})
export class LazyComponent {
  constructor(public valueService: ValueService) {}
}
