import {
  Component, EventEmitter,
  Input,
  OnInit, Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {

  @Output()
  clickedOutside = new EventEmitter();

  @Input()
  active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
