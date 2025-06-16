import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, map, takeWhile, tap } from 'rxjs';
import { Footer } from '../../../core/layout/footer/footer';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule , Footer],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit {
  fullText: string = "The opencrafts Team?";
  typingSpeed: number = 100;
  isTypingComplete: boolean = false;
  typedText$!: Observable<string>;

  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faX = faXTwitter;

  ngOnInit() {
    this.typedText$ = interval(this.typingSpeed).pipe(
      map(i => this.fullText.substring(0, i + 1)),
      takeWhile(text => text.length <= this.fullText.length, true),
      tap(text => {
        this.isTypingComplete = text.length === this.fullText.length;
      })
    );
  }
}
