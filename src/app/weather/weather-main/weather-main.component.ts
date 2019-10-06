import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import * as WeatherActions from '../store/weather.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {
  public weatherData: any;
  public locationCoords: any;
  public weatherPlacesState: Observable<any>;
  public locationForm: FormGroup;
  public displayedColumns: string[] = ['name', 'w_desc', 'wind', 'temp'];

  constructor(
    private weatherService: WeatherService,
    private store: Store<{ weatherPlaces: any[] }>
  ) {}

  ngOnInit() {
    this.locationForm = new FormGroup({
      loc: new FormControl('', [Validators.required, Validators.maxLength(60)])
    });
    this.store.dispatch(new WeatherActions.ClearWeatherPlaces());

    this.weatherService
      .getLocation()
      .pipe(
        flatMap(coords => {
          return this.weatherService.getCitiesAround(coords.coords, 10);
        })
      )
      .subscribe(cities => {
        this.store.dispatch(
          new WeatherActions.AddMultipleWeatherPlaces(cities)
        );
      });

    this.weatherPlacesState = this.store.select('weatherPlaces');
  }

  setLocation(data) {
    this.weatherService
      .getDataByCityName(data.loc)
      .pipe(
        flatMap(cityData => {
          const coords = {
            latitude: cityData.coord.lat,
            longitude: cityData.coord.lon
          };
          return (this.weatherData = this.weatherService.getCitiesAround(
            coords,
            10
          ));
        })
      )
      .subscribe(cities => {
        this.store.dispatch(
          new WeatherActions.AddMultipleWeatherPlaces(cities)
        );
      });
  }

  addTown(name: string) {
    this.store.dispatch(new WeatherActions.AddWeatherPlaces(name));
  }
}
