import { Action } from '@ngrx/store';

import {
  ActionWithPayload,
  lookUpMatcher,
  ReducerLookUp
} from '../store.helpers';

import { LayoutTypes as types } from './layout.types';

export interface LayoutState {
  sideBarOpen: boolean;
  mainPageVideo: boolean;
}

const initialLayoutState: LayoutState = {
  sideBarOpen: false,
  mainPageVideo: false
};

const lookUp: ReducerLookUp<LayoutState> = {
  [types.TOGGLE_SIDE_BAR]: (state, action) => {
    return {...state, sideBarOpen: !state.sideBarOpen};
  },
  [types.SHOW_MAIN_PAGE_VIDEO]: (state, action) => {
    return {...state, mainPageVideo: true};
  }
};

export function layoutReducer(
  state: LayoutState = initialLayoutState,
  action: Action | ActionWithPayload<any>
) {
  return lookUpMatcher<LayoutState>(lookUp, state, action);
}

export const selectSideBarState = (state: LayoutState) => state.sideBarOpen;
export const selectMainPageVideoState = (state: LayoutState) => state.mainPageVideo;
