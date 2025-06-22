import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { RoomDetails } from "../../components/room-details/room-details";

@Component({
  selector: 'app-explore-room',
  imports: [SharedModule, FontAwesomeModule, RoomDetails],
  templateUrl: './explore-room.html',
  styleUrl: './explore-room.css'
})
export class ExploreRoom {
  faReply = faReply;
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }


}
