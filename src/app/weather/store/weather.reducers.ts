import { Action } from "@ngrx/store";
import * as WeatherActions from "./weather.actions";

const initialState = {
  weatherPlaces: ["Krakow", "Mogilany"]
};

export function weatherReducer(
  state = initialState,
  action: WeatherActions.WeatherActions
) {
  switch (action.type) {
    case WeatherActions.ADD_WEATHER_PLACES:
      return {
        ...state,
        weatherPlaces: [...state.weatherPlaces, action.payload]
      };
    default:
      return state;
  }
}
