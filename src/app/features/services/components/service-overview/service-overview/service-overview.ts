import { Component, input, output, signal } from '@angular/core';
import { Service } from '../../../models/service.model';

@Component({
  selector: 'app-service-overview',
  imports: [],
  templateUrl: './service-overview.html',
  styleUrl: './service-overview.css'
})
export class ServiceOverview {
  selectedService = input<Service>();
  close = output<void>();
  
  closeModal() {
    this.close.emit();
  }

}
