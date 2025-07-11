import { Component, computed, HostListener, input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-image-carousel',
  imports: [FontAwesomeModule],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css'
})
export class ImageCarousel {
  faExpand = faExpand;

  // Signal holding the image list
  readonly roomImages = signal<string[]>([
    'images/future_classroom1.jpeg',
    'images/future_classroom2.jpeg',
    'images/laptop_with_software.jpeg',
  ]);

  showFullscreenToggle = input(false);

  // Signal to track the current image index
  currentImageIndex = signal(0);

  // Computed signal to return current image URL
  currentImage = computed(() => this.roomImages()[this.currentImageIndex()]);

  prevImage() {
    const newIndex =
      (this.currentImageIndex() - 1 + this.roomImages().length) %
      this.roomImages().length;

    this.currentImageIndex.set(newIndex);
  }

  nextImage() {
    const newIndex =
      (this.currentImageIndex() + 1) % this.roomImages().length;

    this.currentImageIndex.set(newIndex);
  }

  goToImage(index: number) {
    this.currentImageIndex.set(index);
  }

  fullscreenMode = signal<boolean>(false);
  isAnimatingIn = signal<boolean>(false);
  isAnimatingOut = signal<boolean>(false);

  toggleFullscreen() {
    if (!this.fullscreenMode()) {
      this.isAnimatingIn.set(true);
      this.fullscreenMode.set(true);
    } else {
      this.isAnimatingOut.set(true);
    }
  }

  onAnimationEnd() {
    if (this.isAnimatingOut()) {
      this.fullscreenMode.set(false);
      this.isAnimatingOut.set(false);
    }

    if (this.isAnimatingIn()) {
      this.isAnimatingIn.set(false);
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.fullscreenMode()) return;

    switch (event.key) {
      case 'ArrowLeft':
        this.prevImage();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'Escape':
        this.isAnimatingOut.set(true);
        break;
    }
  }
}
