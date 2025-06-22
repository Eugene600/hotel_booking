import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreRoom } from './pages/explore-room/explore-room';

const routes: Routes = [
  {
    path: '',
    component: ExploreRoom
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoomRoutingModule { }
