import { RECEIVE_GENRES } from '../actions/BookFilterActions';

export default function bookFilters(
  state = {
    genres: []
  },
  action
) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GENRES:
      newState.genres = action.response;
      return newState;
    default:
      return newState;
  }
}
