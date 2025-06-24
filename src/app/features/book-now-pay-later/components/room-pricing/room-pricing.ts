import { Component, computed, effect, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-room-pricing',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './room-pricing.html',
  styleUrl: './room-pricing.css'
})
export class RoomPricing {
  faPlus = faPlus;
  faMinus = faMinus;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;

  adults = signal<number>(2);
  children = signal<number>(0);

  selectedBed = signal('Two Bed');
  dropdownOpen = signal(false);

  bedOptions = ['Single Bed', 'Two Bed', 'Queen Bed', 'King Bed'];

  readonly baseAdultPrice = 7000;
  readonly baseChildPrice = 3500;
  readonly bedPriceMap: Record<string, number> = {
    'Single Bed': 0,
    'Two Bed': 0,
    'Queen Bed': 2000,
    'King Bed': 4000,
  };

  // Computed total price
  totalPrice = computed(() =>
    this.adults() * this.baseAdultPrice +
    this.children() * this.baseChildPrice +
    (this.bedPriceMap[this.selectedBed()] || 0)
  );

  totalPriceChanged = output<number>();

  constructor() {
    effect(() => {
      this.totalPriceChanged.emit(this.totalPrice());
    });
  }

  increaseAdults() {
    this.adults.set(this.adults() + 1);
  }

  decreaseAdults() {
    if (this.adults() > 0) this.adults.set(this.adults() - 1);
  }

  increaseChildren() {
    this.children.set(this.children() + 1);
  }

  decreaseChildren() {
    if (this.children() > 0) this.children.set(this.children() - 1);
  }

  toggleDropdown() {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  selectBed(option: string) {
    this.selectedBed.set(option);
    this.dropdownOpen.set(false);
  }
}


