import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HamburgerComponent } from './hamburger';
import { SideBarComponent } from './side-bar';
import { ButtonLinkComponent } from './button-link';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HamburgerComponent,
    SideBarComponent,
    ButtonLinkComponent
  ],
  exports: [
    HamburgerComponent,
    SideBarComponent,
    ButtonLinkComponent
  ]
})
export class ComponentsModule { }
