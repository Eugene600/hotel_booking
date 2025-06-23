import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faChevronRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
