import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';
import groupBy from 'lodash/groupBy';

function FavoritesList(props) {
  const { favoriteOffers } = props;

  const favorites = groupBy(favoriteOffers, 'city.name');

  console.log(favorites);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers.map((offer) => <FavoriteCard offer={offer} key={offer.id} />)}
          </div>
        </li>
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.array,
};


export default FavoritesList;
