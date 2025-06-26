import { Component, computed, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-custom-calendar',
  imports: [],
  templateUrl: './custom-calendar.html',
  styleUrl: './custom-calendar.css'
})
export class CustomCalendar implements OnInit {
  selectedDate = input<Date | null>(null);
  minDate = input<Date | null>(null);
  maxDate = input<Date | null>(null);

  dateSelected = output<Date>();

  currentMonth = signal(new Date().getMonth());
  currentYear = signal(new Date().getFullYear());

  weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; 

  currentMonthName = computed(() => {
    const date = new Date(this.currentYear(), this.currentMonth(), 1);
    return date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  });


  calendarDays = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const startDayOfWeek = firstDayOfMonth.getDay();

    const days: { date: Date | null }[] = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ date: null });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i) });
    }

    const totalCells = days.length;
    const remainingCells = 42 - totalCells; 
    if (totalCells % 7 !== 0) { 
      for (let i = 0; i < (7 - (totalCells % 7)); i++) {
        days.push({ date: null });
      }
    }


    return days;
  });

  ngOnInit(): void {
    if (this.selectedDate()) {
      this.currentMonth.set(this.selectedDate()!.getMonth());
      this.currentYear.set(this.selectedDate()!.getFullYear());
    }
  }

  goToPreviousMonth() {
    let newMonth = this.currentMonth() - 1;
    let newYear = this.currentYear();
    if (newMonth < 0) {
      newMonth = 11; 
      newYear--;
    }
    this.currentMonth.set(newMonth);
    this.currentYear.set(newYear);
  }

  goToNextMonth() {
    let newMonth = this.currentMonth() + 1;
    let newYear = this.currentYear();
    if (newMonth > 11) {
      newMonth = 0; 
      newYear++;
    }
    this.currentMonth.set(newMonth);
    this.currentYear.set(newYear);
  }

  selectDate(date: Date) {
    if (this.minDate() && date < this.minDate()!) {
      console.warn('Cannot select date before minDate.');
      return;
    }
    if (this.maxDate() && date > this.maxDate()!) {
      console.warn('Cannot select date after maxDate.');
      return;
    }

    this.dateSelected.emit(date);
  }

  isSelectedDate(date: Date): boolean {
    const selected = this.selectedDate();
    return selected ? date.toDateString() === selected.toDateString() : false;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }
}
