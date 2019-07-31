import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  hasErrored: errorReducer
});

export default rootReducer;
