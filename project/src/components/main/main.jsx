import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import CitiesList from '../cities-list/cities-list';
import { changeCity } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import MainWithOffers from '../main-with-offers/main-with-offers';
import MainEmpty from '../main-empty/main-empty';
import { getCity } from '../../store/cities/selectors';

function Main(props) {
  const { setActiveCard, activeCard, offers } = props;

  const stateCity = useSelector(getCity);
  const dispatch = useDispatch();

  const activeOffers = offers.filter((offer) => offer.city.name === stateCity.name);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={activeOffers.length > 0 ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty'}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              stateCity={stateCity}
              changeCity={(city) => dispatch(changeCity(city))}
            />
          </section>
        </div>
        {activeOffers.length > 0 ?
          <MainWithOffers
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            activeOffers={activeOffers}
            stateCity={stateCity}
          /> : <MainEmpty stateCity={stateCity} />}
      </main>
    </div>
  );
}

Main.propTypes = {
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func,
  offers: PropTypes.array,
};

export default Main;
