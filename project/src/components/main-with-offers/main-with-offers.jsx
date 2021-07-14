import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Sorting from '../sorting/sorting';
import cityProp from '../props/city.prop';
import { changeSort } from '../../store/action';
import { sortOffers } from '../../sort';
import { getSort } from '../../store/sort/selectors';

function MainWithOffers(props) {
  const { activeOffers, activeCard, setActiveCard, stateCity, onChangeSort } = props;

  const stateSort = useSelector(getSort);
  const sortedOffers = sortOffers(stateSort, activeOffers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{activeOffers.length} places to stay in {stateCity.name}</b>
          <Sorting
            stateSort={stateSort}
            changeSort={onChangeSort}
          />
          <div className="cities__places-list places__list tabs__content">
            <OffersList
              offers={sortedOffers}
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

const mapDispatchToProps = {
  onChangeSort: changeSort,
};

MainWithOffers.propTypes = {
  stateCity: cityProp,
  onChangeSort: PropTypes.func,
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func,
  activeOffers: PropTypes.array,
};

export {MainWithOffers};
export default connect(null, mapDispatchToProps)(MainWithOffers);
