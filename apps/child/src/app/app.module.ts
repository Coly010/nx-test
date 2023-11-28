import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ValueService } from '@gy-test/value';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzIconModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private valueService: ValueService,
    private nzIconService: NzIconService
  ) {
    valueService.increment();
    this.nzIconService.changeAssetsSource(
      'https://winkong-frontend.oss-cn-qingdao.aliyuncs.com/ng-zorro-icons'
    );
  }
}
