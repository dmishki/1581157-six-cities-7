import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT: 'sort/changeSort',
  GET_LOGIN: 'data/getLogin',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_FAVORITES: 'data/loadFavorites',
  LOAD_COMMENTS: 'data/loadComments',
  POST_COMMENT: 'data/postComment',
  SET_FAVORITE_ITEM: 'data/setFavoriteItem',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  COMMENT_LOADING: 'data/commentLoading',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'route/redirectToRoute',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort,
}));

export const getLogin = createAction(ActionType.GET_LOGIN, (userData) => ({
  payload: userData,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (favorites) => ({
  payload: favorites,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const postComment = createAction(ActionType.POST_COMMENT, (comment) => ({
  payload: comment,
}));

export const setFavoriteItem = createAction(ActionType.SET_FAVORITE_ITEM, (favoriteItem) => ({
  payload: favoriteItem,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (nearbyOffers) => ({
  payload: nearbyOffers,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const commentLoading = createAction(ActionType.COMMENT_LOADING, (status) => ({
  payload: status,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const logout = createAction(ActionType.LOGOUT);
