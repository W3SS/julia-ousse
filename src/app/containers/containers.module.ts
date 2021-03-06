import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../shared/directives';
import { ComponentsModule } from '../shared/components';

import { MainAboutMeComponent } from './main-about-me';
import { MainPortfolioComponent } from './main-portfolio';
import { MainServicesComponent } from './main-services';
import { HeaderComponent } from './header';
import { MainComponent } from './main';
import { FooterComponent } from './footer';
import { PortfolioComponent } from './portfolio';


@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    MainAboutMeComponent,
    MainPortfolioComponent,
    MainServicesComponent,
    FooterComponent,
    PortfolioComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ]
})
export class ContainersModule { }
