import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import cityProp from '../props/city.prop';

function MainWithOffers(props) {
  const { activeOffers, activeCard, setActiveCard, stateCity } = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{activeOffers.length} places to stay in {stateCity.name}</b>
          <form className="places__sorting" action="/" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            <OffersList
              offers={activeOffers}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              offers={activeOffers}
              activeCard={activeCard}
              city={stateCity}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

MainWithOffers.propTypes = {
  stateCity: cityProp,
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func,
  activeOffers: PropTypes.array,
};

export default MainWithOffers;
