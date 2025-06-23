import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-room-pricing',
  imports: [FontAwesomeModule],
  templateUrl: './room-pricing.html',
  styleUrl: './room-pricing.css'
})
export class RoomPricing {
  faPlus = faPlus;
  faMinus = faMinus;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
}
