import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, input, signal } from '@angular/core';
import { faDatabase, faFileImport, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { ServiceOverview } from "../../components/service-overview/service-overview/service-overview";
import { Service } from '../../models/service.model';
import { CoreModule } from "../../../../core/core-module";
import { Footer } from "../../../../core/layout/footer/footer";
import { SharedModule } from '../../../../shared/shared-module';



@Component({
  imports: [FontAwesomeModule, CoreModule, SharedModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  faDatabase = faDatabase;
  faFileImport = faFileImport;
  faMobileAlt = faMobileAlt;

  selectedService = signal<any | null>(null);

  services:Service[] = [
    {
      id: 1,
      title: 'Verisafe',
      overview: 'Securely store and manage student records...',
      description: 'Our robust database solution allows schools to securely manage student records, attendance, performance, and more in one centralized platform.',
      image: 'images/phone_with_code.jpeg'
    },
    {
      id: 2,
      title: 'Magnet',
      overview: 'Automatically sync student records from school systems...',
      description: "Connect seamlessly to existing school systems and extract relevant student data in real time, ensuring accuracy and saving manual effort.",
      image: 'images/another_phone_with_code.jpeg'
    },
    {
      id: 3,
      title: 'Academia App',
      overview: 'Empower students with a smart digital assistant for school life...',
      description: 'Our student-facing app supports daily school tasks—from timetables to assignments, co-curricular engagement, and academic tracking—all in one sleek interface.',
      image: 'images/future_classroom2.jpeg'
    }
  ];

  openModal(service: any) {
    this.selectedService.set(service);
  }

  closeModal() {
    this.selectedService.set(null);
  }

}
