import {
  UPDATE_BOOK_CONDITION,
  UPDATE_BOOK_ISBN,
  UPDATE_BOOK_NAME,
  UPDATE_BOOK_RATING,
  UPDATE_BOOK_REVIEW,
  UPDATE_BOOK_CURRENT_AUTHOR,
  UPDATE_BOOK_PART_OF_SERIES,
  ADD_CURRENT_AUTHOR_TO_BOOK_AUTHORS,
  ADD_SELECTED_GENRE_TO_BOOK_GENRES,
  REMOVE_SELECTED_AUTHOR_FROM_BOOK_AUTHORS,
  REMOVE_SELECTED_GENRE_FROM_BOOK_GENRES
} from '../actions/UploadBookFormActions';

export default function bookForUpload(
  state = {
    book: {
      name: '',
      authors: new Set(),
      isbn: '',
      partOfSeries: '',
      review: '',
      genres: new Set(),
      rating: 'Average',
      condition: 'Average'
    },
    conditionAsNumeric: 3,
    ratingAsNumeric: 3,
    authorInputFieldValue: ''
  },
  action
) {
  const newState = Object.assign({}, state);
  const book = Object.assign({}, newState.book);

  switch (action.type) {
    case UPDATE_BOOK_NAME:
      book.name = action.value;
      newState.book = book;
      return newState;

    case UPDATE_BOOK_ISBN:
      book.isbn = action.value;
      newState.book = book;
      return newState;

    case UPDATE_BOOK_RATING:
      newState.ratingAsNumeric = action.value;
      return newState;

    case UPDATE_BOOK_REVIEW:
      book.review = action.value;
      newState.book = book;
      return newState;

    case UPDATE_BOOK_CONDITION:
      newState.conditionAsNumeric = action.value;
      return newState;

    case UPDATE_BOOK_CURRENT_AUTHOR:
      newState.authorInputFieldValue = action.value;
      return newState;

    case UPDATE_BOOK_PART_OF_SERIES:
      book.partOfSeries = action.value;
      newState.book = book;
      return newState;

    case ADD_CURRENT_AUTHOR_TO_BOOK_AUTHORS:
      book.authors.add(state.authorInputFieldValue);
      newState.book = book;
      newState.authorInputFieldValue = '';
      return newState;

    case ADD_SELECTED_GENRE_TO_BOOK_GENRES:
      book.genres.add(action.value);
      newState.book = book;
      return newState;

    case REMOVE_SELECTED_AUTHOR_FROM_BOOK_AUTHORS:
      book.authors.delete(action.value);
      newState.book = book;
      return newState;

    case REMOVE_SELECTED_GENRE_FROM_BOOK_GENRES:
      book.genres.delete(action.value);
      newState.book = book;
      return newState;

    default:
      return state;
  }
}
