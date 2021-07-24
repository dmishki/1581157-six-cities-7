import { user } from './user';
import {ActionType} from '../action';
import { AuthorizationStatus } from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      });
  });

  it('should change authorization status to authorized', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requireAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it('should change authorization status after logout to unauthorized', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {data: 'data'},
    };

    const requireAuthorizationAction = {
      type: ActionType.LOGOUT,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requireAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userData: {},
      });
  });
});
