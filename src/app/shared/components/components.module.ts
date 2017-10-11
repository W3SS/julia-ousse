import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HamburgerComponent
  ],
  exports: [
    HamburgerComponent
  ]
})
export class ComponentsModule { }
