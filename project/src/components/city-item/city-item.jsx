import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cityProp from '../props/city.prop';
import { useSelector } from 'react-redux';
import { getCity } from '../../store/cities/selectors';

function CityItem(props) {
  const { city, changeCity } = props;
  const stateCity = useSelector(getCity);

  return (
    <li className="locations__item">
      <Link className={ city === stateCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item' } to="/"
        onClick={() => {
          changeCity(city);
        }}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: cityProp,
  changeCity: PropTypes.func.isRequired,
};

export default CityItem;
