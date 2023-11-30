import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ValueService } from 'my-value';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private valueService: ValueService) {
    valueService.changeAssetsSource(
      'https://winkong-frontend.oss-cn-qingdao.aliyuncs.com/ng-zorro-icons/'
    );
  }
}
