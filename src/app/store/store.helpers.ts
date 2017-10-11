import { Action } from '@ngrx/store';

export interface ActionWithPayload<T> extends Action {
  payload?: T;
}

export interface ReducerLookUp<T> {
  [key: string]: (state: T, action) => T;
}

export function lookUpMatcher<T>(
  lookUp: ReducerLookUp<T>,
  state: T,
  action: Action | ActionWithPayload<any>): T {
  return lookUp[action.type] ?
    lookUp[action.type](state, action) :
    state;
}

export const toPayload = (action: any) => action.payload;
