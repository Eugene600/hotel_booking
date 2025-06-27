import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './layout/header/header';
import {Footer} from "./layout/footer/footer";
import { BookingState } from './services/booking-state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Header,
    Footer,
  ],
  exports: [
    Header,
    Footer
  ],
})
export class CoreModule { }
