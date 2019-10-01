import { Action } from '@ngrx/store';

export const ADD_WEATHER_PLACES = 'ADD_WEATHER_PLACES';
export const ADD_MULTIPLE_WEATHER_PLACES = 'ADD_MULTIPLE_WEATHER_PLACES';
export const CLEAR_WEATHER_PLACES = 'CLEAR_WEATHER_PLACES';

export class ClearWeatherPlaces implements Action {
  readonly type = CLEAR_WEATHER_PLACES;

  constructor() {}
}

export class AddWeatherPlaces implements Action {
  readonly type = ADD_WEATHER_PLACES;

  constructor(public payload: any) {}
}

export class AddMultipleWeatherPlaces implements Action {
  readonly type = ADD_MULTIPLE_WEATHER_PLACES;

  constructor(public payload: any) {}
}

export type WeatherActions =
  | AddWeatherPlaces
  | AddMultipleWeatherPlaces
  | ClearWeatherPlaces;
