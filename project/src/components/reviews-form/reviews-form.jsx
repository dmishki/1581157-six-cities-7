import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../store/api-actions';
import { getCommentStatus } from '../../store/data/selectors';
import { CommentStatus, RATINGS } from '../../const';
import { commentSending } from '../../store/action';
import RatingItem from '../rating-item/rating-item';

function ReviewsForm() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [text, setText] = useState('');
  const { id } = useParams();

  const initialState = 0;

  const clearState = () => setSelectedRating(initialState);

  const dispatch = useDispatch();
  const commentStatus = useSelector(getCommentStatus);

  const onTextHandler = (evt) => {
    evt.preventDefault();
    setText(String(evt.target.value).trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(commentSending(CommentStatus.SENDING));

    dispatch(postComment({
      comment: text,
      rating: selectedRating,
      id: id,
    }));
  };

  const handleRatingChange = (rating) => () => {
    setSelectedRating(rating);
  };

  if (commentStatus === CommentStatus.SENT) {
    console.log(text, selectedRating);
    setSelectedRating(clearState);
    setText('');
    dispatch(commentSending(CommentStatus.UNKNOWN));
    console.log(text, selectedRating);
  }

  const isReadyToSubmit = selectedRating && ((text && text.length) >= 50 && (text && text.length) <= 300);

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RATINGS).reverse().map(([rating, title]) =>
          <RatingItem key={rating} rating={Number(rating)} onChangeHandler={handleRatingChange(rating)} isDisabled={commentStatus === CommentStatus.SENDING} selectedRating={selectedRating} title={title} />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea" id="review" name="review" minLength="50" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextHandler}
        disabled={commentStatus === CommentStatus.SENDING}
        value={text}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReadyToSubmit || commentStatus === CommentStatus.SENDING}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
