import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { animalsReducer } from './animalsReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  hasErrored: errorReducer,
  animals: animalsReducer
});

export default rootReducer;
