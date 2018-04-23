export const updateBookName = value => {
  return {
    type: UPDATE_BOOK_NAME,
    value
  };
};

export const updateBookIsbn = value => {
  return {
    type: UPDATE_BOOK_ISBN,
    value
  };
};

export const updateBookPersonalReview = value => {
  return {
    type: UPDATE_BOOK_REVIEW,
    value
  };
};

export const updateBookRating = value => {
  return {
    type: UPDATE_BOOK_RATING,
    value
  };
};

export const updateBookCondition = value => {
  return {
    type: UPDATE_BOOK_CONDITION,
    value
  };
};

export const updateBookCurrentAuthor = value => {
  return {
    type: UPDATE_BOOK_CURRENT_AUTHOR,
    value
  };
};

export const updateBookPartOfSeries = value => {
  return {
    type: UPDATE_BOOK_PART_OF_SERIES,
    value
  };
};

export const addCurrentAuthorToBookAuthors = () => {
  return {
    type: ADD_CURRENT_AUTHOR_TO_BOOK_AUTHORS
  };
};

export const addSelectedGenreToBookGenres = value => {
  return {
    type: ADD_SELECTED_GENRE_TO_BOOK_GENRES,
    value
  };
};

export const removeSelectedGenreFromBookGenres = value => {
  return {
    type: REMOVE_SELECTED_GENRE_FROM_BOOK_GENRES,
    value
  };
};

export const removeSelectedAuthorFromBookAuthors = value => {
  return {
    type: REMOVE_SELECTED_AUTHOR_FROM_BOOK_AUTHORS,
    value
  };
};

export const ADD_CURRENT_AUTHOR_TO_BOOK_AUTHORS =
  'ADD_CURRENT_AUTHOR_TO_BOOK_AUTHORS';
export const ADD_SELECTED_GENRE_TO_BOOK_GENRES =
  'ADD_SELECTED_GENRE_TO_BOOK_GENRES';
export const REMOVE_SELECTED_GENRE_FROM_BOOK_GENRES =
  'REMOVE_SELECTED_GENRE_FROM_BOOK_GENRES';
export const REMOVE_SELECTED_AUTHOR_FROM_BOOK_AUTHORS =
  'REMOVE_SELECTED_AUTHOR_FROM_BOOK_AUTHORS';
export const UPDATE_BOOK_CURRENT_AUTHOR = 'UPDATE_BOOK_CURRENT_AUTHOR';
export const UPDATE_BOOK_NAME = 'UPDATE_BOOK_NAME';
export const UPDATE_BOOK_ISBN = 'UPDATE_BOOK_ISBN';
export const UPDATE_BOOK_REVIEW = 'UPDATE_BOOK_REVIEW';
export const UPDATE_BOOK_RATING = 'UPDATE_BOOK_RATING';
export const UPDATE_BOOK_CONDITION = 'UPDATE_BOOK_CONDITION';
export const UPDATE_BOOK_PART_OF_SERIES = 'UPDATE_BOOK_PART_OF_SERIES';
