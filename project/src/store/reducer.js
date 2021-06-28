import { City, Sort } from '../const';
import { ActionType } from './action';

const initialState = {
  city: City.PARIS,
  sort: Sort.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
