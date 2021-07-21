import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from '../action';
import { City } from '../../const';

const initialState = {
  city: City.PARIS,
};

const cities = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {cities};
