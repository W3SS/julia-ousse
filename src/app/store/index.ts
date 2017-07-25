import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store';

export const ROOT_STORE_MODULE = [
  StoreModule.forRoot(reducers),
  StoreRouterConnectingModule,
  StoreDevtoolsModule.instrument({ maxAge: 50 })
];

