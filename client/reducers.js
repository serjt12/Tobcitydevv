/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import intl from './modules/Intl/IntlReducer';
import home from './modules/Home/HomeReducer';
import travel from './modules/Travel/TravelReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  intl,
  home,
  travel,
});
