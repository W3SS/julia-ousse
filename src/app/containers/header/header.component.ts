import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {
  AppState,
  selectSideBar
} from '../../store';
import {
  toggleSideBar
} from '../../store/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  public readonly sideBarOpen$: Observable<boolean>;

  constructor(public store: Store<AppState>) {
    this.sideBarOpen$ = <any>store.select(selectSideBar);
  }

  toggleSideBar() {
    this.store.dispatch(toggleSideBar());
  }

}
