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
    path: 'mombasa',
    loadChildren: () =>
      import('./features/mombasa/mombasa-module').then((m) => m.MombasaModule),
  },
  {
    path: 'nairobi',
    loadChildren: () =>
      import('./features/nairobi/nairobi-module').then((m) => m.NairobiModule),
  },
  {
    path: 'elementaita',
    loadChildren: () =>
      import('./features/elementaita/elementaita-module').then((m) => m.ElementaitaModule),
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
  {
    path: 'reservation-summary',
    loadChildren: () =>
      import('./features/reservation-summary/reservation-summary-module').then((m) => m.ReservationSummaryModule),
  },
];
