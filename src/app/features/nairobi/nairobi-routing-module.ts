import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nairobi } from './pages/nairobi/nairobi';

const routes: Routes = [
  {
    path: '',
    component: Nairobi
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NairobiRoutingModule { }
