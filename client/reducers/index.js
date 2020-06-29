import { combineReducers } from 'redux';

import alert from './alert';
import bookSearch from './bookSearch';

export default combineReducers({ alert, bookSearch });
