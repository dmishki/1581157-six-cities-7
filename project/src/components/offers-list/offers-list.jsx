import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

function OffersList(props) {
  const { activeCard, setActiveCard, offers } = props;

  return offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} activeCard={activeCard} />);
}

OffersList.propTypes = {
  offers: PropTypes.array,
};

export default OffersList;
