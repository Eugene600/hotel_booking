import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-dates',
  imports: [FontAwesomeModule],
  templateUrl: './edit-dates.html',
  styleUrl: './edit-dates.css'
})
export class EditDates {
  faBed = faBed;
}
