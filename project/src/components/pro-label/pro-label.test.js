import React from 'react';
import { render } from '@testing-library/react';
import ProLabel from './pro-label';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: ProLabel', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({})} >
        <Router history={history}>
          <ProLabel />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /Pro/i,
      ),
    ).toBeInTheDocument();
  });
});
