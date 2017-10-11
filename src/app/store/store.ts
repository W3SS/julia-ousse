import { ActionReducerMap } from '@ngrx/store';
import {
  layoutReducer,
  LayoutState
} from './layout';

export interface AppState {
  layout: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  layout: layoutReducer
};


