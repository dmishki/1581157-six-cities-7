import { getLogin, loadOffers, loadComments, postComment, loadNearbyOffers } from '../action';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  offers: [],
  comments: [],
  userData: {},
  nearbyOffers: [],
  isDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(getLogin, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postComment, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});

export {data};
