import { Component } from '@angular/core';
import { ValueService } from 'my-value';

@Component({
  selector: 'gy-test-cc',
  templateUrl: './cc.component.html',
  styleUrl: './cc.component.less',
})
export class CcComponent {
  constructor(public valueService: ValueService) {}
}
