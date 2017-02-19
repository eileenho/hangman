import * as WordUtil from '../util/word_util';

export const RECEIVE_RANDOM_WORD = "RECEIVE_RANDOM_WORD";
export const RECEIVE_LEVELED_WORD = "RECEIVE_LEVELED_WORD";

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

export const receiveRandomWord = word => ({
  type: RECEIVE_RANDOM_WORD,
  word
});

export const receiveLeveledWord = word => ({
  type: RECEIVE_LEVELED_WORD,
  word
});
