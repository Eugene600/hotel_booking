import { Component, computed, signal } from '@angular/core';

import { Router } from '@angular/router';
import { ImageCarousel } from "../image-carousel/image-carousel";
import { AmenitiesIcons } from "../amenities-icons/amenities-icons";



@Component({
  selector: 'app-room-display',
  imports: [ImageCarousel, AmenitiesIcons],
  templateUrl: './room-display.html',
  styleUrl: './room-display.css'
})
export class RoomDisplay {
  constructor(private router: Router) { }

  goToExploreRoom() {
    this.router.navigate(['/explore-room']);
  }
}
