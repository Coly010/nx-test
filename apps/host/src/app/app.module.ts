import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BaseService } from 'my-base';
import { NzIconService } from 'ng-zorro-antd/icon';
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
