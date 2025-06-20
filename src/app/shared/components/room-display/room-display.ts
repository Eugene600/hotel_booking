import { Component, computed, signal } from '@angular/core';
import { faLaptop, faUtensils, faSpa, faDumbbell, faHotTub, faConciergeBell, faVideo, faPhone, faBath, faUserMd, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-room-display',
  imports: [FontAwesomeModule],
  templateUrl: './room-display.html',
  styleUrl: './room-display.css'
})
export class RoomDisplay {
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

  // Signal holding the image list
  readonly roomImages = signal<string[]>([
    'images/future_classroom1.jpeg',
    'images/future_classroom2.jpeg',
    'images/laptop_with_software.jpeg',
  ]);

  // Signal to track the current image index
  currentImageIndex = signal(0);

  // Computed signal to return current image URL
  currentImage = computed(() => this.roomImages()[this.currentImageIndex()]);

  prevImage() {
    const newIndex =
      (this.currentImageIndex() - 1 + this.roomImages().length) %
      this.roomImages().length;

    this.currentImageIndex.set(newIndex);
  }

  nextImage() {
    const newIndex =
      (this.currentImageIndex() + 1) % this.roomImages().length;

    this.currentImageIndex.set(newIndex);
  }

  goToImage(index: number) {
    this.currentImageIndex.set(index);
  }
}
