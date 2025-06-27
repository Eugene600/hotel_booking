import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { Room } from '../../../../shared/models/room.model';
import { Router } from '@angular/router';
import { Footer } from '../../../../core/layout/footer/footer';

@Component({
  selector: 'app-nairobi',
  imports: [SharedModule, Footer],
  templateUrl: './nairobi.html',
  styleUrl: './nairobi.css'
})
export class Nairobi {
  showStickyHeader = signal<boolean>(false);

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  rooms: Room[] = [
    {
      id: 1,
      title: 'Executive City Room',
      description:
        'Modern, stylish and well-equipped, the Executive City Room offers guests a comfortable stay with panoramic views of Nairobi’s skyline. Comes with free Wi-Fi, smart TV, minibar, and ergonomic workspace.',
      price: 15200,
      location: 'Villa Rosa Kempinski, Nairobi',
      roomsLeft: 4,
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
