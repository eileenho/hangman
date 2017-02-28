import { combineReducers } from 'redux';
import WordsReducer from './words_reducer';
import ScoresReducer from './scores_reducer';

const rootReducer = combineReducers({
  words: WordsReducer,
  scores: ScoresReducer
});

export default rootReducer;
