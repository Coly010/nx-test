import { Component } from '@angular/core';
import { ValueService } from 'my-value';

@Component({
  selector: 'nx-test-child-entry',
  template: `remote child value::{{ valueService.assetsUrlRoot }}`,
})
export class RemoteEntryComponent {
  constructor(public valueService: ValueService) {
    console.log('child valueService::', this.valueService);
  }
}
