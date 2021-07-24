import { cities } from './cities';
import {ActionType} from '../action';

describe('Reducer: cities', () => {
  it('without additional parameters should return initial state', () => {
    expect(cities(undefined, {}))
      .toEqual({
        city: {
          name: 'Paris',
          latitude: 48.856663,
          longitude: 2.351556,
          zoom: 12,
        },
      });
  });

  it('should change city to active city', () => {
    const state = {
      city: {
        name: 'Paris',
        latitude: 48.856663,
        longitude: 2.351556,
        zoom: 12,
      },
    };

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: {
        name: 'Amsterdam',
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      },
    };

    expect(cities(state, changeCityAction))
      .toEqual({
        city: {
          name: 'Amsterdam',
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 12,
        },
      });
  });
});
