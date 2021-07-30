import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import rootReducer from './store/root-reducer';
import { createAPI } from './services/api';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchOffersList} from './store/api-actions';
import { AuthorizationStatus } from './const';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middlewares/redirect';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './browser-history';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

if (localStorage.getItem('token')) {
  store.dispatch(checkAuth());
} else {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
}

store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
