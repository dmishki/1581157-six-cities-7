import { City, Sort, AuthorizationStatus } from '../const';
import { ActionType } from './action';

const initialState = {
  city: City.PARIS,
  sort: Sort.POPULAR,
  offers: [],
  comments: [],
  userData: {},
  nearbyOffers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
    case ActionType.GET_LOGIN:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userData: {},
      };
    default:
      return state;
  }
};

export {reducer};
