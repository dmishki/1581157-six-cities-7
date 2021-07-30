import React from 'react';
import { useSelector } from 'react-redux';
import { getCity } from '../../store/cities/selectors';

function MainEmpty() {
  const stateCity = useSelector(getCity);

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {stateCity.name}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

export default MainEmpty;
