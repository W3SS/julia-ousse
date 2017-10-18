import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainServicesComponent } from './main-services.component';

describe('MainServicesComponent', () => {
  let component: MainServicesComponent;
  let fixture: ComponentFixture<MainServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainServicesComponent ]
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
