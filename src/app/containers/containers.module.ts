import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../shared/directives';
import { ComponentsModule } from '../shared/components';

import { MainAboutMeComponent } from './main-about-me';
import { MainPortfolioComponent } from './main-portfolio';
import { MainServicesComponent } from './main-services';
import { HeaderComponent } from './header';
import { MainComponent } from './main';
import { FooterComponent } from './footer';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    ComponentsModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    MainAboutMeComponent,
    MainPortfolioComponent,
    MainServicesComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ]
})
export class ContainersModule { }
