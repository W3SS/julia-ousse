import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
