import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT: 'sort/changeSort',
  GET_LOGIN: 'data/getLogin',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_COMMENTS: 'data/loadComments',
  POST_COMMENT: 'data/postComment',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const postComment = createAction(ActionType.POST_COMMENT, (comment) => ({
  payload: comment,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (nearbyOffers) => ({
  payload: nearbyOffers,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);
