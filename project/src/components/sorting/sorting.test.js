import React from 'react';
import { render } from '@testing-library/react';
import Sorting from './sorting';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: Sorting', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({
        SORT: {
          sort: 'Popular',
        },
      })}
      >
        <Router history={history}>
          <Sorting />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /Sort by/i,
      ),
    ).toBeInTheDocument();
  });
});
