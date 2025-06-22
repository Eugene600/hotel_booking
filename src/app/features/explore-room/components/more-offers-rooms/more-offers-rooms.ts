import { Component, input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-more-offers-rooms',
  imports: [SharedModule, FontAwesomeModule],
  templateUrl: './more-offers-rooms.html',
  styleUrl: './more-offers-rooms.css'
})
export class MoreOffersRooms {
  faLocationDot = faLocationDot;

  room = input<{
    id: number;
    location: string;
    roomsLeft: number;
    title: string;
    rating: string;
    description: string;
  }>();

}
