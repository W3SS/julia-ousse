import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { routing } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
