import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {

  @Input()
  active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
