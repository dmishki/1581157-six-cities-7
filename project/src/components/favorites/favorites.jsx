import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

function Favorites(props) {
  const { offers } = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page page--favorites-empty">
      <Header />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 ? <FavoritesEmpty /> : <FavoritesList favoriteOffers={favoriteOffers} />}
        </div>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.array,
};

export default Favorites;
