import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-details',
  imports: [SharedModule, FontAwesomeModule],
  templateUrl: './room-details.html',
  styleUrl: './room-details.css'
})
export class RoomDetails {
  faLocationDot = faLocationDot;
  faArrowRight = faArrowRight;

  constructor(private router: Router) { };

  goToBookNow() {
    this.router.navigate(['/book-now-pay-later'])
  }
}
