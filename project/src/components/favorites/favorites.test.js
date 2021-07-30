import React from 'react';
import { render } from '@testing-library/react';
import Favorites from './favorites';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus } from '../../const';
import { createAPI } from '../../services/api';
import thunk from 'redux-thunk';

const api = createAPI(() => { });
const mockStore = configureStore([thunk.withExtraArgument(api)]);
const history = createMemoryHistory();

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

describe('Component: Favorites', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({
        DATA: {
          favorites: [offer],
          isDataLoaded: true,
          userData: userData,
        },
        USER: {
          authorizationStatus: AuthorizationStatus.AUTH,
        },
      })}
      >
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /Beautiful & luxurious studio at great location/i,
      ),
    ).toBeInTheDocument();
  });
});
