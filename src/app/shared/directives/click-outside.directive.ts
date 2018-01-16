import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  public element: HTMLElement;

  @Input() clickOutsideCondition = true;

  @Output() public clickOutside = new EventEmitter<any>();

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(targetElement) {
    if (!this.element.contains(targetElement) && this.clickOutsideCondition) {
      this.clickOutside.emit();
    }
  }
}
