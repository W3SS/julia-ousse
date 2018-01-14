import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
