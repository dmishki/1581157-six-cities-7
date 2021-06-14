import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';

function Reviews(props) {
  const { reviews } = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>
      <ReviewsForm />
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;