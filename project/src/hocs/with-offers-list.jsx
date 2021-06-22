import React from 'react';

const withOffersList = (Component) => {
  function WithOffersList(props) {
    const { offers } = props;

    return offers.map((offer) => <Component {...props} key={offer.id} offer={offer} />);
  }

  return WithOffersList;
};

export default withOffersList;
