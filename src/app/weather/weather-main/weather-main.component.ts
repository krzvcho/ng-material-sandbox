import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-main",
  templateUrl: "./weather-main.component.html",
  styleUrls: ["./weather-main.component.scss"]
})
export class WeatherMainComponent implements OnInit {
  public weatherData: any;
  public locationCoords: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getLocation().subscribe(coordinates => {
      this.weatherData = this.weatherService.getSampleData(coordinates.coords);
    });
  }
}
