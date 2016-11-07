import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

let middlewares = [
  logger(),
  promise()
];

const store = createStore(rootReducer, {}, composeWithDevTools(
  applyMiddleware(...middlewares)
));


export default store;
