import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Header from '../header/header';
import ProLabel from '../pro-label/pro-label';
import PremiumLabel from '../premium-label/premium-label';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import { calculateRatingWidth } from '../../helpers';
import OffersList from '../offers-list/offers-list';
import { fetchCommentsList, fetchNearbyOffers, postFavoriteStatus } from '../../store/api-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getNearbyOffers, getOffers } from '../../store/data/selectors';
import { getCity } from '../../store/cities/selectors';

const MAX_IMAGES_COUNT = 6;

function Room() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const nearbyOffers = useSelector(getNearbyOffers);
  const offers = useSelector(getOffers);

  const offer = offers.find((item) => Number(item.id) === Number(id));

  useEffect(() => {
    if (offer) {
      dispatch(fetchCommentsList(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [dispatch, id, offer]);

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    const isFavoriteStatus = isFavorite ? 0 : 1;
    dispatch(postFavoriteStatus({ isFavoriteStatus, id }));
  };

  if (!offer) {
    return <Redirect to='/not-found'/>;
  }

  const { bedrooms,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    title,
    type,
    rating } = offer;

  const { avatarUrl, isPro, name } = host;
  const calculatedRatingWidth = calculateRatingWidth(rating);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_IMAGES_COUNT).map((imgUrl) => (
                <div className="property__image-wrapper" key={imgUrl}>
                  <img className="property__image" src={imgUrl} aria-hidden alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <PremiumLabel /> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={isFavorite ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: calculatedRatingWidth}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro ? <ProLabel /> : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <Reviews />
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={[offer, ...nearbyOffers]}
              activeCard={Number(id)}
              city={city}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearbyOffers}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
