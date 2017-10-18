import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/store';
import { selectMainPageVideo } from '../../store/selectors';
import { showMainPageVideo } from '../../store/layout';

@Component({
  selector: 'main-services',
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent implements OnInit {

  mainPageVideo$: Observable<boolean>;

  constructor(public store: Store<AppState>) {
    this.mainPageVideo$ = store.select(selectMainPageVideo);
  }

  showMainPageVideo() {
    this.store.dispatch(showMainPageVideo());
  }


  ngOnInit() {
  }

}
