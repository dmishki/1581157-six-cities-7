import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './not-found-page';
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

describe('Component: NotFoundPage', () => {

  it('should render correctly', () => {
    const { getByText } = render(
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
          <NotFoundPage />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /404 Not Found/i,
      ),
    ).toBeInTheDocument();
  });
});
