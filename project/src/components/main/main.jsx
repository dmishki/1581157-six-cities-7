import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import CitiesList from '../cities-list/cities-list';
import { changeCity } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import MainWithOffers from '../main-with-offers/main-with-offers';
import MainEmpty from '../main-empty/main-empty';
import { getActiveOffers } from '../../store/data/selectors';

function Main(props) {
  const { setActiveCard, activeCard } = props;

  const activeOffers = useSelector(getActiveOffers);
  const dispatch = useDispatch();

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={activeOffers.length > 0 ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty'}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              changeCity={(city) => dispatch(changeCity(city))}
            />
          </section>
        </div>
        {activeOffers.length > 0 ?
          <MainWithOffers
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            activeOffers={activeOffers}
          /> : <MainEmpty />}
      </main>
    </div>
  );
}

Main.propTypes = {
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func,
};

export default Main;
