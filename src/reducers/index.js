import { combineReducers } from 'redux';
import isLoading from './isLoadingReducer';
import hasErrored from './hasErroredReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  user
});

export default rootReducer;