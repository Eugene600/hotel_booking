import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { Room } from '../../../../shared/models/room.model';
import { Footer } from '../../../../core/layout/footer/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elementaita',
  imports: [SharedModule, Footer],
  templateUrl: './elementaita.html',
  styleUrl: './elementaita.css'
})
export class Elementaita {
  showStickyHeader = signal<boolean>(false);

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  rooms: Room[] = [
    {
      id: 1,
      title: 'Lake View Cottage',
      description:
        'Wake up to serene views of Lake Elementaita in this beautifully furnished cottage. Features a private veranda, cozy fireplace, free Wi-Fi, and full-board dining.',
      price: 17800,
      location: 'Lake Elementaita Serena Camp',
      roomsLeft: 3,
    },
    {
      id: 2,
      title: 'Safari Tented Camp',
      description:
        'Experience comfort and adventure in our luxurious safari-style tents. Each unit comes with a king-size bed, en-suite bathroom, and a deck overlooking the flamingo-filled lake.',
      price: 15500,
      location: 'Lake Elementaita Lodge',
      roomsLeft: 5,
    },
  ];

}
