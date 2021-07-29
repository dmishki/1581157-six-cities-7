import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, City} from '../../const';
import App from './app';
import { createAPI } from '../../services/api';
import thunk from 'redux-thunk';

let history = null;
let store = null;
let fakeApp = null;

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
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const userData = {
  id: 1,
  email: 'test@test.ru',
  name: 'asdsds',
  token: 'YXNkc2RzQGRzYWRhLmNvbQ==',
  avatarUrl: 'https://7.react.pages.academy/static/avatar/3.jpg',
  isPro: false,
};

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const api = createAPI(() => { });
    const mockStore = configureStore([thunk.withExtraArgument(api)]);

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {
        userData: userData,
        isDataLoaded: true,
        offers: [offer],
        favorites: [offer],
      },
      CITIES: {
        city: City.PARIS,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
