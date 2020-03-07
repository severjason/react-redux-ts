import { combineReducers } from 'redux';

import rootReducer from '../components/root/redux/reducer';

export default combineReducers({
  root: rootReducer,
});
