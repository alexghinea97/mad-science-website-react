import { RECEIVE_MY_BOOKS } from '../actions/MyBooksActions';

export default function myBooks(
  state = {
    books: []
  },
  action
) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MY_BOOKS:
      newState.books = action.response;
      return newState;

    default:
      return newState;
  }
}
