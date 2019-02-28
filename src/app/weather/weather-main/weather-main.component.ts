import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as WeatherActions from "../store/weather.actions";

@Component({
  selector: "app-weather-main",
  templateUrl: "./weather-main.component.html",
  styleUrls: ["./weather-main.component.scss"]
})
export class WeatherMainComponent implements OnInit {
  public weatherData: any;
  public locationCoords: any;
  public weatherPlacesState: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private store: Store<{ weatherPlaces: any[] }>
  ) {}

  ngOnInit() {
    this.weatherService.getLocation().subscribe(coordinates => {
      this.weatherData = this.weatherService.getSampleData(coordinates.coords);
    });
    this.weatherPlacesState = this.store.select("weatherPlaces");
  }

  addTown(name: string) {
    this.store.dispatch(new WeatherActions.AddWeatherPlaces(name));
  }
}
