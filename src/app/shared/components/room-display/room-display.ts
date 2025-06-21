import { Component, computed, signal } from '@angular/core';
import { faLaptop, faUtensils, faSpa, faDumbbell, faHotTub, faConciergeBell, faVideo, faPhone, faBath, faUserMd, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { ImageCarousel } from "../image-carousel/image-carousel";



@Component({
  selector: 'app-room-display',
  imports: [FontAwesomeModule, ImageCarousel],
  templateUrl: './room-display.html',
  styleUrl: './room-display.css'
})
export class RoomDisplay {
  constructor(private router: Router) { }

  goToExploreRoom() {
    this.router.navigate(['/explore-room']);
  }

  amenities = [
    { icon: faLaptop, label: 'Workdesk' },
    { icon: faUtensils, label: 'Bed & Breakfast' },
    { icon: faSpa, label: 'Spa' },
    { icon: faDumbbell, label: 'Gym' },
    { icon: faHotTub, label: 'Heated Pool' },
    { icon: faConciergeBell, label: 'Dinner' },
    { icon: faVideo, label: 'Conferencing' },
    { icon: faPhone, label: 'Concierge' },
    { icon: faBath, label: 'Bathtub' },
    { icon: faUserMd, label: 'Massage' },
    { icon: faClock, label: '24hr Service' },
    { icon: faShieldAlt, label: 'Security' },
  ];

}
