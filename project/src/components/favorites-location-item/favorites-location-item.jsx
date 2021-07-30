import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';

function FavoritesLocationItem({cityName, offers}) {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoriteCard offer={offer} key={offer.id} />)}
      </div>
    </li>
  );
}

FavoritesLocationItem.propTypes = {
  offers: PropTypes.array,
  cityName: PropTypes.string,
};

export default FavoritesLocationItem;
