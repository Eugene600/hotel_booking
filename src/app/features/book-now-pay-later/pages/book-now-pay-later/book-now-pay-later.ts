import { Component, computed, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faChevronRight, faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { RoomPricing } from "../../components/room-pricing/room-pricing";


@Component({
  selector: 'app-book-now-pay-later',
  imports: [FontAwesomeModule, RoomPricing],
  templateUrl: './book-now-pay-later.html',
  styleUrl: './book-now-pay-later.css'
})
export class BookNowPayLater {
  faAngleLeft = faAngleLeft;
  faPlus = faPlus;
  faChevronRight = faChevronRight;
  faXmark = faXmark;

  rooms = signal<number[]>([0]);
  private idCounter = 1;

  roomTotals = signal<Record<number, number>>({});

  updateTotal(roomId: number, price: number) {
    const current = { ...this.roomTotals() };
    current[roomId] = price;
    this.roomTotals.set(current);
  }

  removeRoom(roomId: number) {
    this.rooms.update((list) => list.filter((id) => id !== roomId));

    const updatedTotals = { ...this.roomTotals() };
    delete updatedTotals[roomId];
    this.roomTotals.set(updatedTotals);
  }


  totalPrice = computed(() => {
    return Object.values(this.roomTotals()).reduce((sum, val) => sum + val, 0);
  });

  // Add new room
  addRoom() {
    this.rooms.update((list) => [...list, this.idCounter++]);
  }

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
