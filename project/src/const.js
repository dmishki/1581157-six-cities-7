export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

export const City = {
  PARIS:  {
    name: 'Paris',
    latitude: 48.856663,
    longitude: 2.351556,
    zoom: 12,
  },
  COLOGNE:  {
    name: 'Cologne',
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12,
  },
  BRUSSELS: {
    name: 'Brussels',
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12,
  },
  AMSTERDAM: {
    name: 'Amsterdam',
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12,
  },
  HAMBURG: {
    name: 'Hamburg',
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12,
  },
  DUSSELDORF: {
    name: 'Dusseldorf',
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12,
  },
};

export const Sort = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  SLASH: '/',
  HOTELS: '/hotels/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/',
  NEARBY: '/nearby',
  FAVORITES: '/favorite/',
};

export const RATINGS = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
