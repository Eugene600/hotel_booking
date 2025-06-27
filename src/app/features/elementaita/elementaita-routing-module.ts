import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Elementaita } from './pages/elementaita/elementaita';

const routes: Routes = [
  {
    path: '',
    component: Elementaita
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementaitaRoutingModule { }
