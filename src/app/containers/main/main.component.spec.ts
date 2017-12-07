import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {Store} from '@ngrx/store';
import {AnalyticsService} from '../../services/analytics.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  class MockStore {
    select() {}
  }

  class MockAnalytics {
    pageView() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [
        {
          provide: Store,
          useClass: MockStore
        },
        {
          provide: AnalyticsService,
          useClass: MockAnalytics
        }
      ]
    })
    .overrideComponent( MainComponent, {
      set: {
        template: '<div></div>'
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
