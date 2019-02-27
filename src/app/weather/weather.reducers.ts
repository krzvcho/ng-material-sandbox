import { Action } from "@ngrx/store";

export const ADD_WEATHER_PLACES = "ADD_WEATHER_PLACES";
const initialState = {
  weatherPlaces: ["Krakow", "Mogilany"]
};

export function weatherReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_WEATHER_PLACES:
      return { ...state, weatherPlaces: [...state.weatherPlaces, action] };

    default:
      break;
  }
}
