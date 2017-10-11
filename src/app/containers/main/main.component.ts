import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState, selectSideBar } from '../../store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  sideBarOpen$: Observable<boolean>;

  constructor(public store: Store<AppState>) {
    this.sideBarOpen$ = store.select(selectSideBar);
  }

}
