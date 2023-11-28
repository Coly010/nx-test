import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueService } from '@gy-test/value';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzIconModule,
    RouterModule.forRoot(appRoutes),
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
    valueService.increment();
    valueService.increment();

    this.nzIconService.changeAssetsSource(
      'https://winkong-frontend.oss-cn-qingdao.aliyuncs.com/ng-zorro-icons'
    );
  }
}
