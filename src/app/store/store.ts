import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  routerReducer: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};


