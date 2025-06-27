import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingState {

  constructor() { }

  //Check in and out dates
  private _checkInDate = signal<Date | null>(new Date(new Date().getFullYear(), new Date().getMonth(), 23));
  private _checkOutDate = signal<Date | null>(new Date(new Date().getFullYear(), new Date().getMonth(), 27));

  checkInDate = this._checkInDate.asReadonly();
  checkOutDate = this._checkOutDate.asReadonly();

  setCheckInDate(date: Date) {
    this._checkInDate.set(date);
  }

  setCheckOutDate(date: Date) {
    this._checkOutDate.set(date);
  }

  checkInMonth = computed(() =>
    this._checkInDate()
      ? this._checkInDate()!.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : ''
  );

  checkOutMonth = computed(() =>
    this._checkOutDate()
      ? this._checkOutDate()!.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : ''
  );

  // Room Number and Price totals
  private _roomIds = signal<number[]>([0]);
  private _roomTotals = signal<Record<number, number>>({});

  roomIds = this._roomIds.asReadonly();
  roomTotals = this._roomTotals.asReadonly();

  totalPrice = computed(() =>
    Object.values(this._roomTotals()).reduce((sum, price) => sum + price, 0)
  );

  getRoomCount = computed(() => this._roomIds().length);

  addRoom() {
    const currentIds = this._roomIds();
    const nextId = Math.max(...currentIds, 0) + 1;
    this._roomIds.set([...currentIds, nextId]);
  }

  removeRoom(roomId: number) {
    this._roomIds.update((ids) => ids.filter((id) => id !== roomId));
    const updatedTotals = { ...this._roomTotals() };
    delete updatedTotals[roomId];
    this._roomTotals.set(updatedTotals);
  }

  updateRoomTotal(roomId: number, price: number) {
    const updated = { ...this._roomTotals() };
    updated[roomId] = price;
    this._roomTotals.set(updated);
  }

  resetRooms() {
    this._roomIds.set([0]);
    this._roomTotals.set({});
  }
}
