import React from 'react';
import { render } from '@testing-library/react';
import Review from './review';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

const comment = {
  comment:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/1.png',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

describe('Component: Review', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({})} >
        <Router history={history}>
          <Review review={comment} />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /A quiet cozy and picturesque/i,
      ),
    ).toBeInTheDocument();
  });
});
