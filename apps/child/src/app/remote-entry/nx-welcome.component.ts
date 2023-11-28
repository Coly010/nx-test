import { Component, ViewEncapsulation } from '@angular/core';
import { ValueService } from '@gy-test/value';

@Component({
  selector: 'gy-test-nx-welcome',
  template: ` child::{{ valueService.value }} `,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  constructor(public valueService: ValueService) {}
}
