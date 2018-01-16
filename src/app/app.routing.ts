import { Routes, RouterModule } from '@angular/router';
import { MainComponent, PortfolioComponent } from './containers';

const appRoutes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
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
