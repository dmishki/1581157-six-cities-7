import { ActionCreator } from './action';
import { AuthorizationStatus, APIRoute } from '../const';
import { adaptOffersToClient, adaptCommentsToClient, adaptUserDataToClient } from '../adapters';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({ data }) => data.map((offer) => adaptOffersToClient(offer)))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({ data }) => data.map((comment) => adaptCommentsToClient(comment)))
    .then((comments) => dispatch(ActionCreator.loadComments(comments)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS + id + APIRoute.NEARBY)
    .then(({ data }) => data.map((offer) => adaptOffersToClient(offer)))
    .then(( offers ) => dispatch(ActionCreator.loadNearbyOffers(offers)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => adaptUserDataToClient(data))
    .then((userData) => dispatch(ActionCreator.getLogin(userData)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => adaptUserDataToClient(data))
    .then((userData) => {
      dispatch(ActionCreator.getLogin(userData));
      localStorage.setItem('token', userData.token);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const postComment = ({ comment, rating, id }) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + id, { comment, rating })
    .then(({ data }) => data.map((item) => adaptCommentsToClient(item)))
    .then((comments) => dispatch(ActionCreator.loadComments(comments)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
    })
    .then(() => dispatch(ActionCreator.logout()))
);
