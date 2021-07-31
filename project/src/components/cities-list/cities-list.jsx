import React from 'react';
import PropTypes from 'prop-types';
import { City } from '../../const';
import CityItem from '../city-item/city-item';

function CitiesList({changeCity}) {
  const cities = Object.entries(City).map((city) => city.find((item) => item.name));

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityItem key={city.name} city={city} changeCity={changeCity} /> )}
    </ul>
  );
}

CitiesList.propTypes = {
  changeCity: PropTypes.func.isRequired,
};

export default CitiesList;
