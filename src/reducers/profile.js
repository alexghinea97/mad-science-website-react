export default function user(
  state = {
    user: {
      name: 'Божидар Гевечанов',
      email: 'stil.2910@gmail.com',
      mobilePhoneNumber: '+359 886 989 989',
      gender: 'male',
      city: 'София'
    }
  },
  action
) {
  const newState = Object.assign({}, state);
  const book = Object.assign({}, newState.book);

  switch (action.type) {
    case 'UPDATE_BOOK_NAME':
      book.name = action.value;
      newState.book = book;
      return newState;

    default:
      return state;
  }
}
