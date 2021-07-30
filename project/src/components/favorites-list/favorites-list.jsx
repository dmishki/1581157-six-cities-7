import React from 'react';
import PropTypes from 'prop-types';
import FavoritesLocationItem from '../favorites-location-item/favorites-location-item';
import groupBy from 'lodash/groupBy';

function FavoritesList({favoriteOffers}) {
  const favorites = groupBy(favoriteOffers, 'city.name');

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favorites).map(([cityName, offers]) => <FavoritesLocationItem key={cityName} cityName={cityName} offers={offers} /> ) }
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.array,
};

export default FavoritesList;
