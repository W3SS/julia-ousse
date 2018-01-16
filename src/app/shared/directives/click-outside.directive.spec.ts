import { ClickOutsideDirective } from './click-outside.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<ClickOutsideTestComponent>;
  let clickOutsideDirective: DebugElement;
  let clickOutsideDirectiveInstance: ClickOutsideDirective;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ClickOutsideTestComponent, ClickOutsideDirective],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickOutsideTestComponent);
    clickOutsideDirective = fixture.debugElement.query(
      By.directive(ClickOutsideDirective)
    );
    clickOutsideDirectiveInstance = clickOutsideDirective.injector.get(
      ClickOutsideDirective
    );
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(clickOutsideDirectiveInstance).toBeDefined();
  });

  describe('onDocumentClick method tests', () => {
    it('should be defined', () => {
      expect(clickOutsideDirectiveInstance.onDocumentClick).toBeDefined();
    });

    it('should call clickOutside.emit method', () => {
      spyOn(clickOutsideDirectiveInstance.clickOutside, 'emit');
      clickOutsideDirectiveInstance.clickOutsideCondition = true;
      const div = document.createElement('div');
      document.body.appendChild(div);
      div.click();
      expect(
        clickOutsideDirectiveInstance.clickOutside.emit
      ).toHaveBeenCalled();
    });
  });
});
@Component({
  selector: 'click-outside-test',
  template: `<div id="click-outside-test" (clickOutside)="onClick()"></div>`,
})
class ClickOutsideTestComponent {
  onClick(): void {}
}
