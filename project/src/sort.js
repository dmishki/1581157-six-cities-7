import { Sort } from './const';
import dayjs from 'dayjs';

export const sortOffers = (sort, offers) => {
  switch (sort) {
    case Sort.LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case Sort.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case Sort.TOP:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const sortReviews = (reviews) => Array.from(reviews)
  .sort((a, b) => dayjs(b.date).format('YYYYMMDDHHmmss') - dayjs(a.date).format('YYYYMMDDHHmmss'));
