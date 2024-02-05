import { Component } from '@angular/core';
import { BaseService } from 'my-base';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nx-test-child-entry',
  template: `remote child value::{{ valueService.assetsUrlRoot }}`,
})
export class RemoteEntryComponent {
  constructor(
    public valueService: BaseService,
    private nzIconService: NzIconService
  ) {
    console.log('child valueService::', this.valueService);
    console.log('child nzIconService::', this.nzIconService);
  }
}
