export const adaptOffersToClient = (offer) => {
  const adaptedOffer = Object.assign({},
    offer, {
      host: {
        name: offer.host.name,
        id: offer.host.id,
        avatarUrl: offer.host.avatar_url,
        isPro: offer.host.is_pro,
      },
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      previewImage: offer.preview_image,
    });

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptCommentsToClient = (comment) => {
  const adaptedComment = Object.assign({},
    comment, {
      user: {
        name: comment.user.name,
        id: comment.user.id,
        avatarUrl: comment.user.avatar_url,
        isPro: comment.user.is_pro,
      },
    });

  return adaptedComment;
};

export const adaptUserDataToClient = (userData) => {
  const adaptedUserData = Object.assign({},
    userData, {
      avatarUrl: userData.avatar_url,
      isPro: userData.is_pro,
    });

  delete adaptedUserData.avatar_url;
  delete adaptedUserData.is_pro;

  return adaptedUserData;
};
