import React, { useEffect } from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesList } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/data/selectors';

function Favorites() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesList());
  }, [dispatch]);

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

export default Favorites;
