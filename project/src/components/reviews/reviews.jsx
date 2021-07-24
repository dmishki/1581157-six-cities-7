import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';
import { AuthorizationStatus } from '../../const';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { sortReviews } from '../../sort';

const MAX_REVIEWS_COUNT = 10;

function Reviews({reviews}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const sortedReviews = sortReviews(reviews).slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH ? <ReviewsForm /> : ''}
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
