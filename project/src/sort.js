import { Sort } from './const';

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
