import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { Room } from '../../../../shared/models/room.model';
import { Router } from '@angular/router';
import { Footer } from '../../../../core/layout/footer/footer';

@Component({
  selector: 'app-mombasa',
  imports: [SharedModule, Footer],
  templateUrl: './mombasa.html',
  styleUrl: './mombasa.css'
})
export class Mombasa {
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
      title: 'Ocean View Suite',
      description:
        'Enjoy breathtaking views of the ocean in our luxurious Ocean View Suite, complete with modern amenities, spacious balcony, and premium bedding. Perfect for a romantic getaway or family retreat.',
      price: 67200,
      location: 'Serena Beach Resort & Spa',
      roomsLeft: 5,
    },
  ];
}
