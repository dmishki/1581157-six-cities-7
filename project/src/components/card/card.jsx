import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cardProp from './card.prop.js';
import { calculateRatingWidth } from '../../helpers.js';
import { useDispatch } from 'react-redux';
import { postFavoriteStatus } from '../../store/api-actions.js';
import PremiumCardLabel from '../premium-card-label/premium-card-label.jsx';

function Card(props) {
  const { activeCard, setActiveCard, offer } = props;
  const { id,
    price,
    previewImage,
    type,
    isFavorite,
    isPremium,
    title,
    rating } = offer;

  const dispatch = useDispatch();

  const offerUrl = `/offer/${id}`;
  const calculatedRatingWidth = calculateRatingWidth(rating);

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    const isFavoriteStatus = isFavorite ? 0 : 1;
    dispatch(postFavoriteStatus({ isFavoriteStatus, id }));
  };

  const handleOnCardHover = () => {
    if (id !== activeCard) {
      setActiveCard(id);
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleOnCardHover}
    >
      { isPremium ? <PremiumCardLabel /> : '' }
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
          <button
            className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
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
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func,
  offer: cardProp,
};

export default Card;
