import { merge } from 'lodash';

import { RECEIVE_SCORE } from '../actions/score_actions';

const ScoresReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SCORE:
      return merge({}, {score: action.score});
    default:
      return state;
  }
};

export default ScoresReducer;
