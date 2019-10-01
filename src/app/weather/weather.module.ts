import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatInputModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WeatherMainComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [WeatherService]
})
export class WeatherModule {}
