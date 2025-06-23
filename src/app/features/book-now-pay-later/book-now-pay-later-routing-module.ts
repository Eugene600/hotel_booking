import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookNowPayLater } from './pages/book-now-pay-later/book-now-pay-later';

const routes: Routes = [
  {
    path: '',
    component: BookNowPayLater,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookNowPayLaterRoutingModule { }
