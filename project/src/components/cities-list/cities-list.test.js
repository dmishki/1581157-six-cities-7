import React from 'react';
import { render } from '@testing-library/react';
import CitiesList from './cities-list';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { changeCity } from '../../store/action';
import { City } from '../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: CitiesList', () => {

  it('should render correctly', () => {
    const { getByRole } = render(
      <Provider store={mockStore({
        CITIES: {
          city: City.PARIS,
        },
      })}
      >
        <Router history={history}>
          <CitiesList changeCity={changeCity} />
        </Router>
      </Provider>,
    );
    expect(
      getByRole(
        'list',
      ),
    ).toBeInTheDocument();
  });
});
