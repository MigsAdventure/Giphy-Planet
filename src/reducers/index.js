import { combineReducers } from 'redux';

import gifsReducer from './gifsReducer';
import oneGifReducer from './oneGifReducer';

export default combineReducers({ gifsReducer, oneGifReducer });
