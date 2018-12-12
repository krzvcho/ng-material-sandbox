import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherMainComponent } from './weather-main/weather-main.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
