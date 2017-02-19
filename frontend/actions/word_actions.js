import * as WordUtil from '../util/word_util';

export const RECEIVE_RANDOM_WORD = "RECEIVE_RANDOM_WORD";

export const requestRandomWord = () => dispatch => {
  return WordUtil.fetchRandomWord().then(word => {
    dispatch(receiveRandomWord(word));
  });
};

export const receiveRandomWord = word => ({
  type: RECEIVE_RANDOM_WORD,
  word
});
