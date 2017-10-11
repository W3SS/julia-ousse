import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'hamburger',
  template: `
    <div class="hamburger" 
         [class.active]="active"
         (click)="onHamburgerClick.emit()"
         ripple>
      <span class="hamburger__bar"></span>
      <span class="hamburger__bar"></span>
      <span class="hamburger__bar"></span>
    </div>
  `,
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent {

  @Output() onHamburgerClick: EventEmitter<any> = new EventEmitter();
  @Input() active: boolean;

}
