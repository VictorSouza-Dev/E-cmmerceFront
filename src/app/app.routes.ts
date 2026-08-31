import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/home/pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
];
