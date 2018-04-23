import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const configureStore = () => {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger);
  }

  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );
  store.subscribe(
    throttle(() => {
      //Here only the data should be saved and not the UI
      saveState({
        //todos: store.getState().todos
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
