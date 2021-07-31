import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../store/api-actions';
import { getCommentLoading } from '../../store/data/selectors';
import { RATINGS } from '../../const';
import RatingItem from '../rating-item/rating-item';

function ReviewsForm() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [text, setText] = useState('');
  const { id } = useParams();

  const dispatch = useDispatch();
  const isCommentLoading = useSelector(getCommentLoading);

  const onTextHandler = (evt) => {
    evt.preventDefault();
    setText(String(evt.target.value).trim());
  };

  const resetFormHandler = () => {
    setText('');
    setSelectedRating(0);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(postComment({
      comment: text,
      rating: selectedRating,
      id: id,
    }, resetFormHandler));
  };

  const handleRatingChange = (rating) => () => {
    setSelectedRating(rating);
  };

  const isReadyToSubmit = selectedRating && ((text && text.length) >= 50 && (text && text.length) <= 300);

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RATINGS).reverse().map(([rating, title]) => (
          <RatingItem
            key={rating}
            rating={Number(rating)}
            onChangeHandler={handleRatingChange(rating)}
            isDisabled={isCommentLoading}
            selectedRating={Number(selectedRating)}
            title={title}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea" id="review" name="review" minLength="50" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextHandler}
        disabled={isCommentLoading}
        value={text}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReadyToSubmit || isCommentLoading}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
