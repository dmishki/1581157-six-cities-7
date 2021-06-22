import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withCard from '../../hocs/with-card';

function Card(props) {
  const { offerUrl, previewImage } = props;

  return (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={offerUrl}>
        <img className="place-card__image" src={previewImage} width="260" height="200" aria-hidden alt="Place image" />
      </Link>
    </div>
  );
}

Card.propTypes = {
  offerUrl: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default withCard(Card);
