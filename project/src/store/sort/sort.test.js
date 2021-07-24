import { sort } from './sort';
import {ActionType} from '../action';

describe('Reducer: sort', () => {
  it('without additional parameters should return initial state', () => {
    expect(sort(undefined, {}))
      .toEqual({
        sort: 'Popular',
      });
  });

  it('should change sort to active sort', () => {
    const state = {
      sort: 'Popular',
    };

    const changeSortAction = {
      type: ActionType.CHANGE_SORT,
      payload: 'Price: low to high',
    };

    expect(sort(state, changeSortAction))
      .toEqual({
        sort: 'Price: low to high',
      });
  });
});
