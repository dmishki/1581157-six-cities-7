import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cardProp from './card.prop';
import { calculateRatingWidth } from '../../helpers';

function Card(props) {
  const { setActiveCard, offer } = props;
  const { id,
    price,
    previewImage,
    type,
    isFavorite,
    title,
    rating } = offer;

  const offerUrl = `/offer/${id}`;
  const calculatedRatingWidth = calculateRatingWidth(rating);

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => setActiveCard(id)}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" aria-hidden alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calculatedRatingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  setActiveCard: PropTypes.func,
  offer: cardProp,
};

export default Card;
