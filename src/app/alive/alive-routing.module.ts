import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AliveMainComponent } from './alive-main/alive-main.component';

const routes: Routes = [
  {
    path: '',
    component: AliveMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AliveRoutingModule {}
