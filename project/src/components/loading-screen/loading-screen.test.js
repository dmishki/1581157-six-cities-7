import React from 'react';
import { render } from '@testing-library/react';
import LoadingScreen from './loading-screen';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: LoadingScreen', () => {

  it('should render correctly', () => {
    const { getByRole } = render(
      <Provider store={mockStore({})} >
        <Router history={history}>
          <LoadingScreen />
        </Router>
      </Provider>,
    );
    expect(
      getByRole(
        'img',
      ),
    ).toBeInTheDocument();
  });
});
