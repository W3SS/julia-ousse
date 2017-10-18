import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainServicesComponent } from './main-services.component';
import {Store} from '@ngrx/store';

describe('MainServicesComponent', () => {
  let component: MainServicesComponent;
  let fixture: ComponentFixture<MainServicesComponent>;

  class MockStore {
    dispatch() {}
    select() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainServicesComponent ],
      providers: [
        {
          provide: Store,
          useClass: MockStore
        }
      ]
    })
      .overrideComponent(MainServicesComponent, {
        set: {
          template: '<div></div>'
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
