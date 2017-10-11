import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger';
import { SideBarComponent } from './side-bar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HamburgerComponent,
    SideBarComponent
  ],
  exports: [
    HamburgerComponent,
    SideBarComponent
  ]
})
export class ComponentsModule { }
