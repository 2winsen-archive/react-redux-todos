import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import todoApp from './reducers';

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
}

export default configureStore;