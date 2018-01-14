import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { APP_PROVIDERS } from './services';
import { ROOT_STORE_MODULE } from './store';
import { ContainersModule } from './containers';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ContainersModule,
    routing,
    ...ROOT_STORE_MODULE,
    BrowserModule.withServerTransition({ appId: 'julia-ousse' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
