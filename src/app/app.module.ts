import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './services';
import { ROOT_STORE_MODULE } from './store';
import { ContainersModule } from './containers';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...ROOT_STORE_MODULE,
    routing,
    BrowserModule.withServerTransition({ appId: 'julia-ousse' }),
    ServiceWorkerModule.register('/browser/ngsw-worker.js', { enabled: environment.production }),
    ContainersModule
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
