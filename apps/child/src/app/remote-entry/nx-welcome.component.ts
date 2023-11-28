import { Component, ViewEncapsulation } from '@angular/core';
import { ValueService } from '@gy-test/value';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'gy-test-nx-welcome',
  template: `
    <span nz-icon nzType="coffee" nzTheme="outline"></span>
    child::{{ valueService.value }}
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  constructor(
    public valueService: ValueService,
    private nzIconService: NzIconService
  ) {
    console.log(this.nzIconService);
  }
}
