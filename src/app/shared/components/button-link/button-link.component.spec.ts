import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLinkComponent } from './button-link.component';

describe('ButtonLinkComponent', () => {
  let component: ButtonLinkComponent;
  let fixture: ComponentFixture<ButtonLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLinkComponent ]
    })
    .overrideComponent(ButtonLinkComponent, {
      set: {
        template: '<div></div>'
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
