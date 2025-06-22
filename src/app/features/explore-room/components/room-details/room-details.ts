import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-room-details',
  imports: [SharedModule, FontAwesomeModule],
  templateUrl: './room-details.html',
  styleUrl: './room-details.css'
})
export class RoomDetails {
  faLocationDot = faLocationDot;
  faArrowRight = faArrowRight;
}
