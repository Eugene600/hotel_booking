import { Component, computed, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCarousel } from "../image-carousel/image-carousel";
import { AmenitiesIcons } from "../amenities-icons/amenities-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@Component({
  selector: 'app-room-display',
  imports: [ImageCarousel, AmenitiesIcons, FontAwesomeModule],
  templateUrl: './room-display.html',
  styleUrl: './room-display.css'
})
export class RoomDisplay {
  faLocationDot = faLocationDot;
  constructor(private router: Router) { }

  roomsLeft = input<number>();
  title = input<string>();
  description = input<string>();
  location = input<string>();
  price = input<number>();


  goToExploreRoom() {
    this.router.navigate(['/explore-room']);
  }

  goToBookNow() {
    this.router.navigate(['/book-now-pay-later'])
  }
}
