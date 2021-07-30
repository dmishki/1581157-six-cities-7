import React from 'react';
import { render } from '@testing-library/react';
import OffersList from './offers-list';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
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

describe('Component: OffersList', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({})} >
        <Router history={history}>
          <OffersList offers={[offer]} />
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
