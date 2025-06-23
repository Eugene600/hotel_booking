import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home-module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about-module').then((m) => m.AboutModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./features/services/services-module').then((m) => m.ServicesModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth-module').then((m) => m.AuthModule),
  },
  {
    path: 'explore-room',
    loadChildren: () =>
      import('./features/explore-room/explore-room-module').then((m) => m.ExploreRoomModule),
  },
  {
    path: 'book-now-pay-later',
    loadChildren: () =>
      import('./features/book-now-pay-later/book-now-pay-later-module').then((m) => m.BookNowPayLaterModule),
  },
];
