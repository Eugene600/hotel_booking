import { Component, computed, input, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomCalendar } from '../custom-calendar/custom-calendar';
import { BookingState } from '../../../core/services/booking-state';

@Component({
  selector: 'app-booking-row',
  imports: [FormsModule, CustomCalendar],
  templateUrl: './booking-row.html',
  styleUrl: './booking-row.css'
})
export class BookingRow {

  bookingState: BookingState = inject(BookingState);


  adults = signal<number>(2);
  children = signal<number>(0);

  calendarPosition = input<'above' | 'below'>('above');

  // Which card is active (opened)
  activeCardAdults = signal<'adults' | null>(null);
  activeCardChildren = signal<'children' | null>(null);

  // Temp value for input
  tempValueAdults = signal<number>(0);
  tempValueChildren1 = signal<number>(0);
  tempValueChildren2 = signal<number>(0);
  tempValueChildrenTotal = computed(() =>
    this.tempValueChildren1() + this.tempValueChildren2()
  );

  toggleInputAdults(card: 'adults') {
    // If already open, toggle closed
    if (this.activeCardAdults() === card) {
      this.activeCardAdults.set(null);
    } else {
      this.tempValueAdults.set(this[card]());
      this.activeCardAdults.set(card);
    }
  }

  toggleInputChildren(card: 'children') {
    // If already open, toggle closed
    if (this.activeCardChildren() === card) {
      this.activeCardChildren.set(null);
    } else {
      const current = this[card]();
      this.tempValueChildren1.set(current);
      this.tempValueChildren1.set(0);
      this.activeCardChildren.set(card);
    }
  }

  applyAdults(card: 'adults') {
    this[card].set(this.tempValueAdults());
    this.activeCardAdults.set(null); // hide input after applying
  }

  applyChildren(card: 'children') {
    this[card].set(this.tempValueChildrenTotal());
    this.activeCardChildren.set(null); // hide input after applying
  }

  segmentLabels = ['Bed & Breakfast Rates', 'Half Board Rates', 'Full Board Rates'];

  // signal to track selected segment index
  selectedSegment = signal<number>(0);

  selectSegment(index: number) {
    this.selectedSegment.set(index);
  }

  indicatorTransform = computed(() => {
    const index = this.selectedSegment();
    return `translateY(${index * 20}%)`;
  });


  showCalendar = signal<boolean>(false);

  selectedField = signal<'checkIn' | 'checkOut' | null>(null);

  toggleCalendar(field: 'checkIn' | 'checkOut') {
    this.selectedField.set(field);
    this.showCalendar.set(!this.showCalendar());
  }

  onDateSelected(date: Date) {
    if (this.selectedField() === 'checkIn') {
      this.bookingState.setCheckInDate(date);
    } else if (this.selectedField() === 'checkOut') {
      this.bookingState.setCheckOutDate(date);
    }

    this.showCalendar.set(false);
  }

  //Promo code section
  showPromoInput = signal(false);

  togglePromo() {
    this.showPromoInput.update((v) => !v);
  }

  applyPromo() {
    this.showPromoInput.set(false);
  }
}
