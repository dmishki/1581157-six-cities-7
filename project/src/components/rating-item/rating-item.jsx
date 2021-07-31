import React from 'react';
import PropTypes from 'prop-types';

function RatingItem(props) {
  const { rating, onChangeHandler, isDisabled, selectedRating, title } = props;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio"
        onChange={onChangeHandler}
        disabled={isDisabled}
        checked={Number(selectedRating) === Number(rating)}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

RatingItem.propTypes = {
  rating: PropTypes.number.isRequired,
  selectedRating: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default RatingItem;
