import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { Router } from '@angular/router';
import { Footer } from '../../../../core/layout/footer/footer';
import { Room } from '../../../../shared/models/room.model';


@Component({
  selector: 'app-home',
  imports: [SharedModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  showStickyHeader = signal<boolean>(false);

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  rooms: Room[] = [
    {
      id: 1,
      title: 'Garden Room',
      description:
        'The tastefully furnished and cosy rooms are all en suite, with a central ceiling fan, direct dial telephone, satellite TV and a workstation with wireless capabilities. Personal valets provide a 24-hour room service.',
      price: 48100,
      location: 'Indian Ocean Beach Resort',
      roomsLeft: 8,
    },
    {
      id: 2,
      title: 'Deluxe Twin Room',
      description:
        'Spacious twin room perfect for business or leisure travelers. Includes premium bedding, rainfall shower, high-speed internet, and access to the rooftop lounge and fitness center.',
      price: 13400,
      location: 'Radisson Blu Hotel, Upper Hill',
      roomsLeft: 6,
    },
  ];
}
