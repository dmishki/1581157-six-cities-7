import { changeSort } from '../action';
import { Sort } from '../../const';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  sort: Sort.POPULAR,
};

const sort = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});

export {sort};
