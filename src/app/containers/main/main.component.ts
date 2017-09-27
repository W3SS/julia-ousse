import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  show = false;

  items$;

  constructor(public http: Http) { }

  ngOnInit() {
    this.items$ = this.http.get('https://reqres.in/api/users?page=2')
      .map(response => response.json())
      .map(({data}) => data)
  }

  onLoad() {
    console.log("LOADED IMAGES!");
  }

  onClick() {
    this.show = true;
    console.log('CLICKED!');
  }

}
