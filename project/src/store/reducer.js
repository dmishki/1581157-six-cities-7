import { City } from '../const';
import { ActionType } from './action';

const initialState = {
  city: City.PARIS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.LIST_FILLING:
      return {
        ...state,
        mistakes: state.mistakes + action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
