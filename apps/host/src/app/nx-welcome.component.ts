import { Component, ViewEncapsulation } from '@angular/core';
import { ValueService } from '@gy-test/value';

@Component({
  selector: 'gy-test-nx-welcome',
  template: `
    <span nz-icon nzType="bug" nzTheme="outline"></span>
    host::{{ valueService.value }}
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  constructor(public valueService: ValueService) {}
}
