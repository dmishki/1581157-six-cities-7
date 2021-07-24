import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../auth';
import PrivateRoute from '../private-route/private-route';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getIsDataLoaded } from '../../store/data/selectors';

function App() {
  const [activeCard, setActiveCard] = useState(1);

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen  />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <Main
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.LOGIN}
        render={() => <Login />}
        redirect={AppRoute.MAIN}
        status={AuthorizationStatus.NO_AUTH}
      >
      </PrivateRoute>
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => <Favorites />}
        redirect={AppRoute.LOGIN}
        status={AuthorizationStatus.AUTH}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.OFFER}>
        <Room
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
