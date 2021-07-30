import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus } from '../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();

const userData = {
  id: 1,
  email: 'test@test.ru',
  name: 'asdsds',
  token: 'YXNkc2RzQGRzYWRhLmNvbQ==',
  avatarUrl: 'https://7.react.pages.academy/static/avatar/3.jpg',
  isPro: false,
};

describe('Component: Header', () => {

  it('should render correctly', () => {
    const { getByRole } = render(
      <Provider store={mockStore({
        DATA: {
          userData: userData,
        },
        USER: {
          authorizationStatus: AuthorizationStatus.AUTH,
        },
      })}
      >
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );
    expect(
      getByRole(
        'navigation',
      ),
    ).toBeInTheDocument();
  });
});
