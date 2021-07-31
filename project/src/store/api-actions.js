import { loadOffers, loadComments, loadNearbyOffers, requireAuthorization, getLogin, logout as signOut, loadFavorites, setFavoriteItem, commentLoading } from './action';
import { AuthorizationStatus, APIRoute } from '../const';
import { adaptOffersToClient, adaptCommentsToClient, adaptUserDataToClient } from '../adapters';
import { NameSpace } from './root-reducer';
import { AppRoute } from '../const';
import { redirectToRoute } from './action';
import Swal from 'sweetalert2';

const showErrorMessage = () => {
  Swal.fire({
    title: 'Error!',
    text: 'Network error. Server is not available.',
    icon: 'error',
    confirmButtonText: 'Close',
  });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => adaptUserDataToClient(data))
    .then((userData) => dispatch(getLogin(userData)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => showErrorMessage())
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => adaptUserDataToClient(data))
    .then((userData) => {
      dispatch(getLogin(userData));
      localStorage.setItem('token', userData.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => showErrorMessage())
);

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({ data }) => data.map((offer) => adaptOffersToClient(offer)))
    .then((offers) => dispatch(loadOffers(offers)))
    .catch(() => showErrorMessage())
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({ data }) => data.map((offer) => adaptOffersToClient(offer)))
    .then((offers) => dispatch(loadFavorites(offers)))
    .catch(() => showErrorMessage())
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({ data }) => data.map((comment) => adaptCommentsToClient(comment)))
    .then((comments) => dispatch(loadComments(comments)))
    .catch(() => showErrorMessage())
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS + id + APIRoute.NEARBY)
    .then(({ data }) => data.map((offer) => adaptOffersToClient(offer)))
    .then((offers) => dispatch(loadNearbyOffers(offers)))
    .catch(() => showErrorMessage())
);

export const postComment = ({ comment, rating, id }, onResetForm) => (dispatch, _getState, api) => {
  dispatch(commentLoading(true));
  return (
    api.post(APIRoute.COMMENTS + id, { comment, rating })
      .then(({ data }) => data.map((item) => adaptCommentsToClient(item)))
      .then((comments) => {
        dispatch(loadComments(comments));
        onResetForm();
      })
      .catch(() => showErrorMessage())
      .finally(() => dispatch(commentLoading(false)))
  );
};

export const postFavoriteStatus = ({ isFavoriteStatus, id }) => (dispatch, _getState, api) => {
  const authStatus = _getState()[NameSpace.USER].authorizationStatus;

  if (authStatus !== AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.LOGIN));
  } else {
    api.post(APIRoute.FAVORITES + id + APIRoute.SLASH + isFavoriteStatus)
      .then(({ data }) => adaptOffersToClient(data))
      .then((offer) => dispatch(setFavoriteItem(offer)))
      .catch (() => showErrorMessage());
  }
};

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(signOut()))
);
