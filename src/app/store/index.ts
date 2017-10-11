import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store';

export const ROOT_STORE_MODULE = [
  StoreModule.forRoot(reducers),
  StoreDevtoolsModule.instrument({ maxAge: 50 })
];

export { AppState } from './store';
export * from './selectors';

