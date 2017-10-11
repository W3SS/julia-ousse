import { createSelector } from '@ngrx/store';
import { selectSideBarState } from './layout';
import { AppState } from './store';

const selectLayoutState = (state: AppState) => state.layout;
export const selectSideBar = createSelector(selectLayoutState, selectSideBarState);
