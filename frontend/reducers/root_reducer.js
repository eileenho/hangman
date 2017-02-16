import { combineReducers } from 'redux';
import WordsReducer from './words_reducer';

const rootReducer = combineReducers({
  words: WordsReducer
});

export default rootReducer;
