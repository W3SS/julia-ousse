import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'button-link',
  template: `
    <div class="button-link">
      <a [routerLink]="[link]" class="button-link__item">
        <ng-content></ng-content>
      </a>
    </div>
  `,
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit {

  @Input() link = '';

  constructor() { }

  ngOnInit() {
  }

}
