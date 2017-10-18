import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { MainComponent } from './main/main.component';
import { DirectivesModule } from '../shared/directives';
import { ComponentsModule } from '../shared/components/components.module';
import { MainAboutMeComponent } from './main-about-me';
import { MainPortfolioComponent } from './main-portfolio';

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
    MainPortfolioComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class ContainersModule { }
