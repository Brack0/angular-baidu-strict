import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaiduMapModule } from 'angular2-baidu-map';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BaiduMapModule.forRoot({ ak: 'your ak' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
