import {combineReducers} from 'redux';
import { cities } from './cities/cities';
import { sort } from './sort/sort';
import { user } from './user/user';
import { data } from './data/data';

export const NameSpace = {
  CITIES: 'CITIES',
  SORT: 'SORT',
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.CITIES]: cities,
  [NameSpace.SORT]: sort,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
