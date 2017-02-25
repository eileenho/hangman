import * as WordUtil from '../util/word_util';

export const RECEIVE_RANDOM_WORD = "RECEIVE_RANDOM_WORD";
export const RECEIVE_LEVELED_WORD = "RECEIVE_LEVELED_WORD";
export const RECEIVE_WORD = "RECEIVE_WORD";
export const RECEIVE_SCORE = "RECEIVE_SCORE";

export const requestRandomWord = () => dispatch => {
  return WordUtil.fetchRandomWord().then(word => {
    dispatch(receiveRandomWord(word));
  });
};

export const requestLeveledWord = level => dispatch => {
  return WordUtil.fetchLeveledWord(level).then(word => {
    dispatch(receiveLeveledWord(word));
  });
};

export const createWord = newWord => dispatch => {
  return WordUtil.createWord(newWord).then(word => {
    dispatch(receiveWord(word));
  });
};

export const createScore = newScore => dispatch => {
  return WordUtil.createScore(newScore).then(score => {
    dispatch(receiveScore(score));
  });
};

export const checkWord = newWord => dispatch => {
  return WordUtil.checkWord(newWord).then(word => {
    dispatch(receiveWord(word));
  });
};

export const receiveRandomWord = word => ({
  type: RECEIVE_RANDOM_WORD,
  word
});

export const receiveLeveledWord = word => ({
  type: RECEIVE_LEVELED_WORD,
  word
});

export const receiveWord = word => ({
  type: RECEIVE_WORD,
  word
});

export const receiveScore = score => ({
  type: RECEIVE_SCORE,
  score
});
