import { Action } from '@ngrx/store';
import * as WeatherActions from './weather.actions';

const initialState = {
  weatherPlaces: []
};

export function weatherReducer(
  state = initialState,
  action: WeatherActions.WeatherActions
) {
  switch (action.type) {
    case WeatherActions.CLEAR_WEATHER_PLACES:
      console.log('WeatherActions.CLEAR_WEATHER_PLACES');
      return {
        ...state,
        weatherPlaces: []
      };
    case WeatherActions.ADD_WEATHER_PLACES:
      console.log('payload action ADD_WEATHER_PLACES', action);
      return {
        ...state,
        weatherPlaces: [...state.weatherPlaces, action.payload]
      };
    case WeatherActions.ADD_MULTIPLE_WEATHER_PLACES:
      console.log('payload action ADD_MULTIPLE_WEATHER_PLACES', action);
      return {
        ...state,
        weatherPlaces: [...state.weatherPlaces, ...action.payload]
      };
    default:
      return state;
  }
}
