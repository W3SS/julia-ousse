import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState, selectSideBar } from '../../store';
import { AnalyticsService } from '../../services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sideBarOpen$: Observable<boolean>;

  constructor(private store: Store<AppState>,
              private analytics: AnalyticsService) {
    console.log(this.store);
    this.sideBarOpen$ = store.select(selectSideBar);
  }

  ngOnInit() {
    this.analytics.pageView('/index.html');
  }

}
