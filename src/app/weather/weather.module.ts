import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [WeatherMainComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  
})
export class WeatherModule { }
