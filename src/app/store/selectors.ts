import { createSelector } from '@ngrx/store';
import { selectSideBarState, selectMainPageVideoState } from './layout';
import { AppState } from './store';

const selectLayoutState = (state: AppState) => state.layout;
export const selectSideBar = createSelector(selectLayoutState, selectSideBarState);
export const selectMainPageVideo = createSelector(selectLayoutState, selectMainPageVideoState);
