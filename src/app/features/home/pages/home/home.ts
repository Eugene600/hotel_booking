import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  showStickyHeader = signal<boolean>(false);

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
