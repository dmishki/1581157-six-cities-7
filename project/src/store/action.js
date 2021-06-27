export const ActionType = {
  CITY_CHANGE: 'cities/cityChange',
  LIST_FILLING: 'city/listFilling',
};

export const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),
};
