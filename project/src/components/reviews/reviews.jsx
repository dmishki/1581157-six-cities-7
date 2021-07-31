import React from 'react';
import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';
import { AuthorizationStatus } from '../../const';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getSortedComments } from '../../store/data/selectors';

function Reviews() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const sortedReviews = useSelector(getSortedComments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH ? <ReviewsForm /> : ''}
    </section>
  );
}

export default Reviews;
