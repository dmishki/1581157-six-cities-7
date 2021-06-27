import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cityProp from '../props/city.prop';

function CityItem(props) {
  const { city, stateCity, cityChange } = props;

  return (
    <li className="locations__item">
      <Link className={ city === stateCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item' } to="/"
        onClick={() => {
          cityChange(city);
        }}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  stateCity: cityProp,
  city: cityProp,
  cityChange: PropTypes.func.isRequired,
};

export default CityItem;
