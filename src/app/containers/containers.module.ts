import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { MainComponent } from './main/main.component';
import { DirectivesModule } from '../shared/directives';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class ContainersModule { }
