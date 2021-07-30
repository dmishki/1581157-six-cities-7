import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import { checkAuth, fetchCommentsList, fetchFavoritesList, fetchNearbyOffers, fetchOffersList, login, postComment, logout } from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import { adaptCommentsToClient, adaptOffersToClient } from '../adapters';

let api = null;

const userData = {
  id: 1,
  email: 'test@test.ru',
  name: 'asdsds',
  token: 'YXNkc2RzQGRzYWRhLmNvbQ==',
  'avatar_url': 'https://7.react.pages.academy/static/avatar/3.jpg',
  'is_pro': false,
};

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    'avatar_url': 'img/1.png',
    id: 3,
    'is_pro': true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  'is_favorite': false,
  'is_premium': false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  'max_adults': 4,
  'preview_image': 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const comment = {
  comment:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    'avatar_url': 'img/1.png',
    id: 4,
    'is_pro': false,
    name: 'Max',
  },
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, userData);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, userData);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersListLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [offer]);

    return offersListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptOffersToClient(offer)],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesListLoader = fetchFavoritesList();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [offer]);

    return favoritesListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [adaptOffersToClient(offer)],
        });
      });
  });

  it('should make a correct API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const commentsListLoader = fetchCommentsList(fakeId);

    apiMock
      .onGet(APIRoute.COMMENTS + fakeId)
      .reply(200, [comment]);

    return commentsListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [adaptCommentsToClient(comment)],
        });
      });
  });

  it('should make a correct API call to GET /nearby offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const nearbyOffersLoader = fetchNearbyOffers(fakeId);

    apiMock
      .onGet(APIRoute.HOTELS + fakeId + APIRoute.NEARBY)
      .reply(200, [offer]);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [adaptOffersToClient(offer)],
        });
      });
  });

  it('should make a correct API call to POST /comments comment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 23;
    const sendUserComment = postComment({
      comment: 'new comment',
      rating: 4,
      id: fakeId,
    });

    apiMock
      .onPost(APIRoute.COMMENTS + fakeId)
      .reply(200, [comment]);

    return sendUserComment(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [adaptCommentsToClient(comment)],
        });
      });
  });

  it('should make a correct API call to delete /logout user data', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutAction = logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(200);

    return logoutAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
      });
  });
});
