import { Component } from '@angular/core';
import { BaseService } from 'my-base';

@Component({
  selector: 'nx-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private valueService: BaseService) {}
  test() {
    this.valueService.changeAssetsSource('http://aaaaaa');
  }
}
