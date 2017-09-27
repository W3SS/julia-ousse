import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './services';
import { ROOT_STORE_MODULE } from './store';
import { ContainersModule } from './containers';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ContainersModule,
    routing,
    ...ROOT_STORE_MODULE,
    HttpModule,
    BrowserModule.withServerTransition({ appId: 'julia-ousse' })
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
