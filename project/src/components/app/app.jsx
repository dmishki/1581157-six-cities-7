import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';
import { City } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../auth';
import PrivateRoute from '../private-route/private-route';
import { getCity } from '../../store/cities/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getIsDataLoaded, getOffers } from '../../store/data/selectors';
import browserHistory from '../../browser-history';

function App() {
  const [activeCard, setActiveCard] = useState(1);

  const city = useSelector(getCity);
  const offers = useSelector(getOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            offers={offers}
            activeCard={activeCard}
            city={City.AMSTERDAM}
            setActiveCard={setActiveCard}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login city={city} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites offers={offers} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.OFFER}>
          <Room
            offers={offers}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            city={City.AMSTERDAM}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
