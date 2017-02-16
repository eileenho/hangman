import { merge } from 'lodash';

import { RECEIVE_ALL_WORDS } from '../actions/word_actions';

const WordsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_WORDS:
      return merge({}, action.words);
    default:
      return state;
  }
};

export default WordsReducer;
