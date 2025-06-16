import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  faBed = faBed;
}
