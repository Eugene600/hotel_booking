import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [FontAwesomeModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  faBed = faBed;
  animationClass = 'login-enter';

  ngOnInit(): void {
    setTimeout(() => {
      this.animationClass = 'login-enter login-enter-active';
    }, 50);
  }
}
