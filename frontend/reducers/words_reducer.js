import { merge } from 'lodash';

import { RECEIVE_RANDOM_WORD } from '../actions/word_actions';

const WordsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_WORD:
      return merge({}, {word: action.word });
    default:
      return state;
  }
};

export default WordsReducer;
