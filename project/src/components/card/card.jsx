import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import cardProp from './card.prop';
import { AppRoute } from '../../const';

function Card(props) {
  const { offer } = props;
  const { id,
    price,
    previewImage,
    type,
    isFavorite,
    title } = offer;

  const history = useHistory();

  return (
    <article className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" aria-hidden alt="Place image" />
        </a>
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
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link onClick={() => history.push(AppRoute.OFFER)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: cardProp,
};

export default Card;
