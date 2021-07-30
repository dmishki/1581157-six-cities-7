import { AppRoute, AuthorizationStatus, City } from '../const';
import {
  logout,
  ActionType,
  changeCity,
  changeSort,
  getLogin,
  loadOffers,
  loadFavorites,
  loadComments,
  postComment,
  setFavoriteItem,
  loadNearbyOffers,
  requireAuthorization,
  redirectToRoute
} from './action';


describe('Actions', () => {

  it('action creator for change city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: {city: City.PARIS},
    };

    expect(changeCity({city: City.PARIS}))
      .toEqual(expectedAction);
  });

  it('action creator for change sort returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT,
      payload: {
        sort: 'sortType',
      },
    };

    expect(changeSort({sort: 'sortType'}))
      .toEqual(expectedAction);
  });

  it('action creator for user login data returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_LOGIN,
      payload: {
        userData: 'userData',
      },
    };

    expect(getLogin({userData: 'userData'}))
      .toEqual(expectedAction);
  });

  it('action creator for load offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: {
        offers: 'offers',
      },
    };

    expect(loadOffers({offers: 'offers'}))
      .toEqual(expectedAction);
  });

  it('action creator for load favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: {
        favorites: 'favorites',
      },
    };

    expect(loadFavorites({favorites: 'favorites'}))
      .toEqual(expectedAction);
  });

  it('action creator for load comments returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: {
        comments: 'comments',
      },
    };

    expect(loadComments({comments: 'comments'}))
      .toEqual(expectedAction);
  });

  it('action creator for post comment returns correct action', () => {
    const expectedAction = {
      type: ActionType.POST_COMMENT,
      payload: {
        comment: 'comment',
      },
    };

    expect(postComment({comment: 'comment'}))
      .toEqual(expectedAction);
  });

  it('action creator for set favorite item returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITE_ITEM,
      payload: {
        favoriteItem: 'favoriteItem',
      },
    };

    expect(setFavoriteItem({favoriteItem: 'favoriteItem'}))
      .toEqual(expectedAction);
  });

  it('action creator for load nearby offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: {
        nearbyOffers: 'nearbyOffers',
      },
    };

    expect(loadNearbyOffers({nearbyOffers: 'nearbyOffers'}))
      .toEqual(expectedAction);
  });

  it('action creator for authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.AUTH,
      },
    };

    expect(requireAuthorization({status: AuthorizationStatus.AUTH}))
      .toEqual(expectedAction);
  });

  it('action creator for redirect returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: {
        url: AppRoute.LOGIN,
      },
    };

    expect(redirectToRoute({url: AppRoute.LOGIN}))
      .toEqual(expectedAction);
  });


  it('action creator for logout', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });
});
