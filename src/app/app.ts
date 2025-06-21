import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';
import {Footer} from "./core/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [CoreModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   constructor(public router: Router) {}

  shouldShowHeader(): boolean {
    return this.router.url !== '/login';
  }
}
