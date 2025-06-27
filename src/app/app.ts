import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';

@Component({
  selector: 'app-root',
  imports: [CoreModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public router: Router) { }

  private hiddenHeaderRoutes = [
    '/login',
    '/explore-room',
    '/book-now-pay-later',
    '/reservation-summary',
    '/reservation-summary/edit-dates',
  ];

  shouldShowHeader(): boolean {
    const cleanUrl = this.router.url.split('?')[0];
    return !this.hiddenHeaderRoutes.includes(cleanUrl);
  }
}
