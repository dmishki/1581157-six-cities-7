import { getLogin, loadOffers, loadComments, postComment, loadNearbyOffers, loadFavorites, setFavoriteItem, commentSending } from '../action';
import { createReducer } from '@reduxjs/toolkit';
import { CommentStatus } from '../../const';

const initialState = {
  offers: [],
  comments: [],
  userData: {},
  nearbyOffers: [],
  favorites: [],
  isDataLoaded: false,
  commentStatus: CommentStatus.UNKNOWN,
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
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(commentSending, (state, action) => {
      state.commentStatus = action.payload;
    })
    .addCase(postComment, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(setFavoriteItem, ({ offers, nearbyOffers, favorites }, action) => {
      const index = favorites.findIndex((item) => item.id === action.payload.id);
      favorites.splice(index, 1);

      if (nearbyOffers.some((item) => item.id === action.payload.id)) {
        nearbyOffers.find((item) => item.id === action.payload.id).isFavorite = action.payload.isFavorite;
      }

      if (offers.some((item) => item.id === action.payload.id)) {
        offers.find((item) => item.id === action.payload.id).isFavorite =
        action.payload.isFavorite;
      }
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});

export {data};
