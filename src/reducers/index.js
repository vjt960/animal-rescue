import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { animalsReducer } from './animalsReducer';
import { donationsReducer } from './donationsReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  hasErrored: errorReducer,
  animals: animalsReducer,
  donations: donationsReducer
});

export default rootReducer;
