import * as ScoreUtil from '../util/score_util';

export const RECEIVE_SCORE = "RECEIVE_SCORE";

export const createScore = newScore => dispatch => {
  return ScoreUtil.createScore(newScore).then(score => {
    dispatch(receiveScore(score));
  });
};

export const receiveScore = score => ({
  type: RECEIVE_SCORE,
  score
});
