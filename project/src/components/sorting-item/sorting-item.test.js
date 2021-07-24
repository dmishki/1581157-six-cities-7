import React from 'react';
import { render } from '@testing-library/react';
import SortingItem from './sorting-item';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Sort } from '../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: SortingItem', () => {

  it('should render correctly', () => {
    const { getByRole } = render(
      <Provider store={mockStore({})} >
        <Router history={history}>
          <SortingItem isActive={false} text={Sort.POPULAR} />
        </Router>
      </Provider>,
    );
    expect(
      getByRole(
        'listitem',
      ),
    ).toBeInTheDocument();
  });
});
