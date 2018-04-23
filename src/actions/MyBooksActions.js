export const receiveMyBooks = response => {
  return {
    type: RECEIVE_MY_BOOKS,
    response
  };
};

export const RECEIVE_MY_BOOKS = 'RECEIVE_MY_BOOKS';
