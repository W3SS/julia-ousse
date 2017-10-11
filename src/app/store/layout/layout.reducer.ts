import { Action } from '@ngrx/store';

import {
  ActionWithPayload,
  lookUpMatcher,
  ReducerLookUp
} from '../store.helpers';

import { LayoutTypes as types } from './layout.types';

export interface LayoutState {
  sideBarOpen: boolean;
}

const initialLayoutState: LayoutState = {
  sideBarOpen: false
};

const lookUp: ReducerLookUp<LayoutState> = {
  [types.TOGGLE_SIDE_BAR]: (state, action) => {
    return {...state, sideBarOpen: !state.sideBarOpen};
  }
};

export function layoutReducer(
  state: LayoutState = initialLayoutState,
  action: Action | ActionWithPayload<any>
) {
  return lookUpMatcher<LayoutState>(lookUp, state, action);
}

export const selectSideBarState = (state: LayoutState) => state.sideBarOpen;
