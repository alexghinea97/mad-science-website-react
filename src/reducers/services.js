export default function services(state = {}, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'ADD_WEBSITE_DEV_SERVICE':
      newState.websiteDev = action.requestInfo;
      return newState;

    default:
      return state;
  }
}
