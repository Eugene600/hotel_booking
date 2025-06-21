import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  imports: [],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css'
})
export class ImageCarousel {
  // Signal holding the image list
  readonly roomImages = signal<string[]>([
    'images/future_classroom1.jpeg',
    'images/future_classroom2.jpeg',
    'images/laptop_with_software.jpeg',
  ]);

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
}
