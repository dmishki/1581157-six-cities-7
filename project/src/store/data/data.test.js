import { data } from './data';
import {ActionType} from '../action';
import { CommentStatus } from '../../const';

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({
        offers: [],
        comments: [],
        userData: {},
        nearbyOffers: [],
        favorites: [],
        isDataLoaded: false,
        commentStatus: CommentStatus.UNKNOWN,
      });
  });

  it('should load user login data', () => {
    const state = {
      offers: [],
      comments: [],
      userData: {},
      nearbyOffers: [],
      favorites: [],
      isDataLoaded: false,
    };

    const getLoginAction = {
      type: ActionType.GET_LOGIN,
      payload: {data: 'data'},
    };

    expect(data(state, getLoginAction))
      .toEqual({
        offers: [],
        comments: [],
        userData: {data: 'data'},
        nearbyOffers: [],
        favorites: [],
        isDataLoaded: false,
      });
  });

  it('should load offers data', () => {
    const state = {
      offers: [],
      comments: [],
      userData: {},
      nearbyOffers: [],
      favorites: [],
      isDataLoaded: false,
    };

    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [{
        offers: 'offers',
      }],
      isDataLoaded: true,
    };

    expect(data(state, loadOffersAction))
      .toEqual({
        offers: [{offers: 'offers'}],
        comments: [],
        userData: {},
        nearbyOffers: [],
        favorites: [],
        isDataLoaded: true,
      });
  });

  it('should load favorites data', () => {
    const state = {
      offers: [],
      comments: [],
      userData: {data: 'data'},
      nearbyOffers: [],
      favorites: [],
      isDataLoaded: true,
    };

    const loadFavoritesAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [{
        favorites: 'favorites',
      }],
    };

    expect(data(state, loadFavoritesAction))
      .toEqual({
        offers: [],
        comments: [],
        userData: {data: 'data'},
        nearbyOffers: [],
        favorites: [{favorites: 'favorites'}],
        isDataLoaded: true,
      });
  });

  it('should load comments data', () => {
    const state = {
      offers: [],
      comments: [],
      userData: {},
      nearbyOffers: [],
      favorites: [],
      isDataLoaded: true,
    };

    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [{
        comments: 'comments',
      }],
    };

    expect(data(state, loadCommentsAction))
      .toEqual({
        offers: [],
        comments: [{
          comments: 'comments',
        }],
        userData: {},
        nearbyOffers: [],
        favorites: [],
        isDataLoaded: true,
      });
  });

  it('should post new comment to comments data', () => {
    const state = {
      offers: [],
      comments: [],
      userData: {},
      nearbyOffers: [],
      favorites: [],
      isDataLoaded: true,
    };

    const postCommentAction = {
      type: ActionType.POST_COMMENT,
      payload: {comment: 'comment'},
    };

    expect(data(state, postCommentAction))
      .toEqual({
        offers: [],
        comments: [],
        comment: {comment: 'comment'},
        userData: {},
        nearbyOffers: [],
        favorites: [],
        isDataLoaded: true,
      });
  });

  it('should set favorite item status', () => {
    const state = {
      offers: [{
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      }],
      nearbyOffers: [{
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      }],
      favorites: [{
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      }],
    };

    const setFavoriteItemStatusAction = {
      type: ActionType.SET_FAVORITE_ITEM,
      payload: {
        id: 1,
        isFavorite: false,
      },
    };

    expect(data(state, setFavoriteItemStatusAction))
      .toEqual({
        offers: [{
          id: 1,
          isFavorite: false,
        },
        {
          id: 2,
          isFavorite: true,
        }],
        nearbyOffers: [{
          id: 1,
          isFavorite: false,
        },
        {
          id: 2,
          isFavorite: true,
        }],
        favorites: [{
          id: 2,
          isFavorite: true,
        }],
      });
  });

  it('should load nearby offers', () => {
    const state = {
      offers: [],
      comments: [],
      userData: {},
      nearbyOffers: [],
      favorites: [],
      isDataLoaded: true,
    };

    const loadNearbyOffersAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [{nearbyOffers: 'nearbyOffers'}],
    };

    expect(data(state, loadNearbyOffersAction))
      .toEqual({
        offers: [],
        comments: [],
        userData: {},
        nearbyOffers: [{nearbyOffers: 'nearbyOffers'}],
        favorites: [],
        isDataLoaded: true,
      });
  });

});
