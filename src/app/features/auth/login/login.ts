import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [FontAwesomeModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  faBed = faBed;
}
