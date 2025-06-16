import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './pages/services/services';
import { ServicesRoutingModule } from './services-routing-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Services,
    ServicesRoutingModule,
  ]
})
export class ServicesModule { }
