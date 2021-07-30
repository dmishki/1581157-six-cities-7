import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../store/api-actions';
import { getCommentStatus } from '../../store/data/selectors';
import { CommentStatus } from '../../const';
import { commentSending } from '../../store/action';

function ReviewsForm() {
  const [selectedRating, setSelectedRating] = useState();
  const [text, setText] = useState('');
  const { id } = useParams();
  const textRef = useRef();

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

    setSelectedRating(0);
    setText('');
  };

  const handleRatingChange = (rating) => () => {
    setSelectedRating(rating);
  };

  if (commentStatus === CommentStatus.SENT) {
    document.querySelectorAll('.form__rating-input').forEach((input) => input.checked = false);
    textRef.current.value = '';
    dispatch(commentSending(CommentStatus.UNKNOWN));
  }

  const isReadyToSubmit = selectedRating && ((text && text.length) >= 50 && (text && text.length) <= 300);

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onChange={handleRatingChange(5)}
          disabled={commentStatus === CommentStatus.SENDING}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={handleRatingChange(4)}
          disabled={commentStatus === CommentStatus.SENDING}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={handleRatingChange(3)}
          disabled={commentStatus === CommentStatus.SENDING}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={handleRatingChange(2)}
          disabled={commentStatus === CommentStatus.SENDING}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={handleRatingChange(1)}
          disabled={commentStatus === CommentStatus.SENDING}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea" id="review" name="review" minLength="50" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextHandler}
        ref={textRef}
        disabled={commentStatus === CommentStatus.SENDING}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReadyToSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
