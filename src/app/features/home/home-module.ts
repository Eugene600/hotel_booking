import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing-module';
import { Home } from './pages/home/home';



@NgModule({
  imports: [
    CommonModule,
    Home,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
