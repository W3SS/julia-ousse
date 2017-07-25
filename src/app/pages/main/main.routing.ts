import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

export const routing = RouterModule.forChild(appRoutes);

