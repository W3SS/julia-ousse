import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    })
      .overrideComponent(AppComponent, {
        set: {
          template: '<div></div>'
        }
      })
      .compileComponents();
  }));
  it('true to be true', () => {
    expect(true).toBe(true);
  });
});
