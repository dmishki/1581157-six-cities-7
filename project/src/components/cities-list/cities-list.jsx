import React from 'react';
import PropTypes from 'prop-types';
import { City } from '../../const';
import CityItem from '../city-item/city-item';
import cityProp from '../props/city.prop';

function CitiesList(props) {
  const { stateCity, cityChange } = props;

  const cities = Object.entries(City).map((city) => city.find((item) => item.name));

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityItem key={city.name} stateCity={stateCity} city={city} cityChange={cityChange} /> )}
    </ul>
  );
}

CitiesList.propTypes = {
  stateCity: cityProp,
  cityChange: PropTypes.func.isRequired,
};

export default CitiesList;
