import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mombasa } from './pages/mombasa/mombasa';

const routes: Routes = [
  {
    path: '',
    component: Mombasa
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MombasaRoutingModule { }
