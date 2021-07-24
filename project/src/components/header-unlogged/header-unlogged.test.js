import React from 'react';
import { render } from '@testing-library/react';
import HeaderUnlogged from './header-unlogged';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: HeaderUnlogged', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <HeaderUnlogged />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /Sign in/i,
      ),
    ).toBeInTheDocument();
  });
});
