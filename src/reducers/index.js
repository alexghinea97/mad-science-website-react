import { combineReducers } from 'redux';
import bookForUpload from './bookForUpload';
import bookFilters from './bookFilters';
import profile from './profile';
import myBooks from './myBooks';
import bookInstances from './bookInstances';
const bookApp = combineReducers({
  bookForUpload,
  profile,
  bookFilters,
  myBooks,
  bookInstances
});

export default bookApp;
