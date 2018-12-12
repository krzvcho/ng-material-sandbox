import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherMainComponent } from './weather-main/weather-main.component';

@NgModule({
  declarations: [WeatherMainComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
