import React from 'react';
import { render } from '@testing-library/react';
import ReviewsForm from './reviews-form';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { CommentStatus } from '../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: ReviewsForm', () => {

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={mockStore({
        DATA: {
          commentStatus: CommentStatus.UNKNOWN,
        },
      })}
      >
        <Router history={history}>
          <ReviewsForm />
        </Router>
      </Provider>,
    );
    expect(
      getByText(
        /To submit review please make sure to set/i,
      ),
    ).toBeInTheDocument();
  });
});
