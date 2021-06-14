import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

function OffersList(props) {
  const { setActiveCard, offers } = props;

  return offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} />);
}

OffersList.propTypes = {
  offers: PropTypes.array,
};

export default OffersList;
