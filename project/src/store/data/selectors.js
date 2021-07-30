import { NameSpace } from '../root-reducer';

export const getUserData = (state) => state[NameSpace.DATA].userData;

export const getOffers = (state) => state[NameSpace.DATA].offers;

export const getComments = (state) => state[NameSpace.DATA].comments;

export const getComment = (state) => state[NameSpace.DATA].comment;

export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;

export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;

export const getCommentStatus = (state) => state[NameSpace.DATA].commentStatus;

export const getFavoriteOffers = (state) => state[NameSpace.DATA].favorites;
