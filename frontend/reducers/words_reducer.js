import { merge } from 'lodash';

import { RECEIVE_RANDOM_WORD,
         RECEIVE_LEVELED_WORD,
         RECEIVE_WORD,
         RECEIVE_SCORE } from '../actions/word_actions';

const WordsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_WORD:
      return merge({}, {word: action.word });
    case RECEIVE_LEVELED_WORD:
      return merge({}, {word: action.word });
    case RECEIVE_WORD:
      return merge({}, {word: action.word });
    case RECEIVE_SCORE:
      return merge({}, {score: action.score});
    default:
      return state;
  }
};

export default WordsReducer;
