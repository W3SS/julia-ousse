import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortfolioComponent } from './main-portfolio.component';

describe('MainPortfolioComponent', () => {
  let component: MainPortfolioComponent;
  let fixture: ComponentFixture<MainPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPortfolioComponent ]
    })
      .overrideComponent(MainPortfolioComponent, {
        set: {
          template: '<div></div>'
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
