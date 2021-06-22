import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withCard from '../../hocs/with-card';

function NearbyCard(props) {
  const { offerUrl, previewImage } = props;

  return (
    <div className="near-places__image-wrapper place-card__image-wrapper">
      <Link to={offerUrl}>
        <img className="place-card__image" src={previewImage} width="260" height="200" aria-hidden alt="Place image" />
      </Link>
    </div>
  );
}

NearbyCard.propTypes = {
  offerUrl: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default withCard(NearbyCard);
