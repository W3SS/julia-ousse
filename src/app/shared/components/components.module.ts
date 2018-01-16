import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HamburgerComponent } from './hamburger';
import { SideBarComponent } from './side-bar';
import { ButtonLinkComponent } from './button-link';
import { DirectivesModule } from '../directives';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
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
