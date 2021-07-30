import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postFavoriteStatus } from '../../store/api-actions';
import cardProp from '../card/card.prop';

function FavoriteCard(props) {
  const { offer } = props;
  const { id,
    price,
    previewImage,
    type,
    title,
    isFavorite } = offer;

  const offerUrl = `/offer/${id}`;
  const dispatch = useDispatch();

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    const isFavoriteStatus = isFavorite ? 0 : 1;
    dispatch(postFavoriteStatus({ isFavoriteStatus, id }));
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="150" height="110" aria-hidden alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

FavoriteCard.propTypes = {
  offer: cardProp,
};

export default FavoriteCard;
