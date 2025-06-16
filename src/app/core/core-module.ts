import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './layout/header/header';
import {Footer} from "./layout/footer/footer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Header,
    Footer
  ],
  exports: [
    Header,
    Footer
  ],
})
export class CoreModule { }
