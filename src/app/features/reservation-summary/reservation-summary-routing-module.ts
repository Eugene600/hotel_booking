import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationSummary } from './pages/reservation-summary/reservation-summary';
import { EditDates } from './pages/edit-dates/edit-dates';

const routes: Routes = [
  {
    path: '',
    component: ReservationSummary
  },
  {
    path: 'edit-dates',
    component: EditDates
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationSummaryRoutingModule { }
