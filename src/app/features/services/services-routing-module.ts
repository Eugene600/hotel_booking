import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Services } from './pages/services/services';

const routes: Routes = [
  {
    path: '',
    component: Services
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
