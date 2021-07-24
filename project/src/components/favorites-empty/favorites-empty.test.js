import React from 'react';
import { render } from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: FavoritesEmpty', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <FavoritesEmpty />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /Nothing yet saved/i,
      ),
    ).toBeInTheDocument();
  });
});
