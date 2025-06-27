import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { RoomDetails } from "../../components/room-details/room-details";
import { MoreOffersRooms } from "../../components/more-offers-rooms/more-offers-rooms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-room',
  imports: [SharedModule, FontAwesomeModule, RoomDetails, MoreOffersRooms],
  templateUrl: './explore-room.html',
  styleUrl: './explore-room.css'
})

export class ExploreRoom {
  faReply = faReply;
  constructor(private location: Location, private router: Router) { }

  goBack() {
    this.location.back();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  rooms = [
    {
      id: 1,
      location: 'Nairobi',
      roomsLeft: 8,
      title: 'Garden Room',
      rating: '⭐⭐⭐⭐☆',
      description: 'The tastefully furnished and cosy rooms are all en suite, with...'
    },
    {
      id: 2,
      location: 'Mombasa',
      roomsLeft: 5,
      title: 'Ocean View Room',
      rating: '⭐⭐⭐⭐⭐',
      description: 'Enjoy a scenic ocean view and luxury furnishings...'
    },
    {
      id: 3,
      location: 'Naivasha',
      roomsLeft: 2,
      title: 'Lake View Suite',
      rating: '⭐⭐⭐☆☆',
      description: 'Peaceful lakeside suite with modern amenities...'
    },
    {
      id: 4,
      location: 'Kisumu',
      roomsLeft: 3,
      title: 'Executive Room',
      rating: '⭐⭐⭐⭐☆',
      description: 'Spacious executive room ideal for business trips...'
    }
  ];


  currentIndex = signal(0);
  itemsPerPage = 2;

  visibleRooms = computed(() => {
    const start = this.currentIndex();
    return this.rooms.slice(start, start + this.itemsPerPage);
  });

  nextSlide() {
    const nextIndex = this.currentIndex() + this.itemsPerPage;
    if (nextIndex < this.rooms.length) {
      this.currentIndex.set(nextIndex);
    }
  }

  prevSlide() {
    const prevIndex = this.currentIndex() - this.itemsPerPage;
    if (prevIndex >= 0) {
      this.currentIndex.set(prevIndex);
    }
  }

  get atStart(): boolean {
    return this.currentIndex() === 0;
  }

  get atEnd(): boolean {
    return this.currentIndex() + this.itemsPerPage >= this.rooms.length;
  }

}
