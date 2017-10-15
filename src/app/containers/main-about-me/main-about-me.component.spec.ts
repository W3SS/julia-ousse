import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAboutMeComponent } from './main-about-me.component';

describe('MainAboutMeComponent', () => {
  let component: MainAboutMeComponent;
  let fixture: ComponentFixture<MainAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAboutMeComponent ]
    })
      .overrideComponent( MainAboutMeComponent, {
        set: {
          template: '<div></div>'
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
