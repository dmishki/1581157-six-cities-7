import React from 'react';
import dayjs from 'dayjs';
import reviewProp from './review.prop';
import { calculateRatingWidth } from '../../helpers';

function Review(props) {
  const { review } = props;

  const { comment,
    user,
    rating,
    date,
  } = review;

  const {
    avatarUrl,
    name,
  } = user;

  const calculatedRatingWidth = calculateRatingWidth(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user" key={user.id}>
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: calculatedRatingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
