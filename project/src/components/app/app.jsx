import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';
import { City } from '../../const';

function App(props) {
  const [activeCard, setActiveCard] = useState(1);
  const { offers, reviews } = props;

  return (
    <BrowserRouter>
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
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites offers={offers} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <Room
            reviews={reviews}
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

App.propTypes = {
  offers: PropTypes.array,
  reviews: PropTypes.array,
};

export default App;
