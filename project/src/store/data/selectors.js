import { createSelector } from 'reselect';
import { sortOffers, sortReviews } from '../../sort';
import { getCity } from '../cities/selectors';
import { NameSpace } from '../root-reducer';
import { getSort } from '../sort/selectors';

const MAX_REVIEWS_COUNT = 10;

export const getUserData = (state) => state[NameSpace.DATA].userData;

export const getOffers = (state) => state[NameSpace.DATA].offers;

export const getComments = (state) => state[NameSpace.DATA].comments;

export const getComment = (state) => state[NameSpace.DATA].comment;

export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;

export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;

export const getCommentStatus = (state) => state[NameSpace.DATA].commentStatus;

export const getFavoriteOffers = (state) => state[NameSpace.DATA].favorites;

export const getSortedComments = createSelector(
  getComments,
  (comments) => sortReviews(comments).slice(0, MAX_REVIEWS_COUNT));

export const getActiveOffers = createSelector(
  getOffers,
  getCity,
  (offers, city) => offers.filter((offer) => offer.city.name === city.name));

export const getSortedOffers = createSelector(
  getSort,
  getActiveOffers,
  (sort, offers) => sortOffers(sort, offers));
