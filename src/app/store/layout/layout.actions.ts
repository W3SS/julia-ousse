import { Action } from '@ngrx/store';
import { LayoutTypes as types } from './layout.types';

export const toggleSideBar = (): Action => {
  return {
    type: types.TOGGLE_SIDE_BAR
  };
};

export const showMainPageVideo = (): Action => {
  return {
    type: types.SHOW_MAIN_PAGE_VIDEO
  };
};
