import { RECEIVE_BOOK_INSTANCES } from '../actions/BookInstancesActions';

export default function bookInstances(
  state = {
    books: []
  },
  action
) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BOOK_INSTANCES:
      newState.books = action.response;
      return newState;

    default:
      return newState;
  }
}
