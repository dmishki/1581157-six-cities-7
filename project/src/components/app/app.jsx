import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';
import { City } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../auth';

function App(props) {
  const [activeCard, setActiveCard] = useState(1);
  const {authorizationStatus, isDataLoaded, offers, reviews} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,

});

export {App};
export default connect(mapStateToProps, null)(App);
