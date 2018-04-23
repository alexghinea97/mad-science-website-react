export const receiveBookInstances = response => {
  return {
    type: RECEIVE_BOOK_INSTANCES,
    response
  };
};

export const RECEIVE_BOOK_INSTANCES = 'RECEIVE_BOOK_INSTANCES';
