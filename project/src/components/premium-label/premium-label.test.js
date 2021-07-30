import React from 'react';
import { render } from '@testing-library/react';
import PremiumLabel from './premium-label';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: PremiumLabel', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({})} >
        <Router history={history}>
          <PremiumLabel />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /Premium/i,
      ),
    ).toBeInTheDocument();
  });
});
