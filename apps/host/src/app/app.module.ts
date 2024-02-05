import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BaseService } from 'my-base';
import { AppComponent } from './app.component';
import { NzIconService } from 'ng-zorro-antd/icon';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private valueService: BaseService,
    private nzIconService: NzIconService
  ) {
    this.valueService.changeAssetsSource('https://nx.dev');
    this.nzIconService.changeAssetsSource(
      'https://winkong-frontend.oss-cn-qingdao.aliyuncs.com/ng-zorro-icons'
    );
  }
}
