import React from 'react';
import { render } from '@testing-library/react';
import HeaderLogged from './header-logged';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

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

describe('Component: HeaderLogged', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({
        DATA: {
          userData: userData,
        },
      })}
      >
        <Router history={history}>
          <HeaderLogged />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /Sign out/i,
      ),
    ).toBeInTheDocument();
  });
});
