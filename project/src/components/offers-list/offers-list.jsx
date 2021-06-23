import React from 'react';
import Card from '../card/card';

function OffersList(props) {
  const { offers } = props;

  return offers.map((offer) => <Card {...props} key={offer.id} offer={offer} />);
}

export default OffersList;
