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

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
  getLogin: (userData) => ({
    type: ActionType.GET_LOGIN,
    payload: userData,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  postComment: (comment) => ({
    type: ActionType.POST_COMMENT,
    payload: comment,
  }),
  loadNearbyOffers: (nearby) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearby,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
