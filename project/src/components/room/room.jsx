import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Header from '../header/header';
import ProLabel from '../pro-label/pro-label';
import PremiumLabel from '../premium-label/premium-label';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import PropTypes from 'prop-types';
import { calculateRatingWidth } from '../../helpers';
import cityProp from '../props/city.prop';
import withOffersList from '../../hocs/with-offers-list';
import nearbyCard from '../nearby-card/nearby-card';

const OffersNearbyListWrapped = withOffersList(nearbyCard);

function Room(props) {
  const { id } = useParams();
  const { offers = [], reviews, activeCard, setActiveCard, city } = props;
  const offer = offers.find((item) => Number(item.id) === Number(id));
  const offersNearby = offers.filter((item) => Number(item.id) !== Number(id));

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
              {images.map((imgUrl) => (
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
                <button className={isFavorite ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'} type="button">
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
              <Reviews reviews={reviews} />
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offersNearby}
              activeCard={activeCard}
              city={city}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersNearbyListWrapped
                offers={offersNearby}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  setActiveCard: PropTypes.func,
  activeCard: PropTypes.number,
  city: cityProp,
  offers: PropTypes.array,
  reviews: PropTypes.array,
};

export default Room;
