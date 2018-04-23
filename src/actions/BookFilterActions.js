export const receiveGenres = response => {
  return {
    type: 'RECEIVE_GENRES',
    response
  };
};

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
