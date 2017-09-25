import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
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
