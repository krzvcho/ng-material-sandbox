import { Action } from "@ngrx/store";

export const ADD_WEATHER_PLACES = "ADD_WEATHER_PLACES";

export class AddWeatherPlaces implements Action {
  readonly type = ADD_WEATHER_PLACES;

  constructor(public payload: any) {}
}

export type WeatherActions = AddWeatherPlaces;
