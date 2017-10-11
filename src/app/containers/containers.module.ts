import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { MainComponent } from './main/main.component';
import { DirectivesModule } from '../shared/directives';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    ComponentsModule
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
